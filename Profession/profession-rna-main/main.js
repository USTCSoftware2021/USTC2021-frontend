var $_ = (x) => document.querySelector(x);
var $$ = (x) => document.querySelectorAll(x);

function sidebarClickHandler(e) {
    var items = [...$$(".leftside .buttons .li")];
    var divs = [...$_("#content").children];
    items.map((elem, index) => {
        if (elem === e.target) {
            elem.classList.add("clicked");
            divs[index].hidden = false;
        } else {
            elem.classList.remove("clicked");
            divs[index].hidden = true;
        }
    });
}

function applyResult() {
    var RNA = localStorage.getItem("RNA");
    var req = {
        "body": RNA,
        "result": ""
    }
    postData("/IntelRNA", req).then((res) => {
        $_("#RNA_secondary_structure > .waiting").hidden = true;
        var container = new fornac.FornaContainer("#rna_forna", { applyForce: false });
        var options = {
            structure: res["result"],
            sequence: res["body"],
        };
        container.addRNA(options.structure, options);
        console.log(res)
    });
}

(function () {
    var divs = [...$_("#content").children];
    $$(".leftside .buttons .li")[0].click();
    divs.map((x) => {
        x.hidden = true;
    });
    divs[0].hidden = false;
    applyResult();
})();
