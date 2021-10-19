var $ = (x) => document.querySelector(x);
var $$ = (x) => document.querySelectorAll(x);

function sidebarClickHandler(e) {
    var items = [...$$(".leftside .buttons .li")];
    var divs = [...$("#content").children];
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

function applyResult(hash) {
    postData("http://47.103.25.116/function/v1/array/", data).then((x) => {
        // console.log(x);
    });
}

(function () {
    var divs = [...$("#content").children];
    $$(".leftside .buttons .li")[1].click();
    divs.map((x) => {
        x.hidden = true;
    });
    divs[0].hidden = false;
    manageSVG();
    applyResult(hash);
})();
