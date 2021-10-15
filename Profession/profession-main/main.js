var $ = (x) => document.querySelector(x);
var $$ = (x) => document.querySelectorAll(x);
var content = $("#content");

var hash = localStorage.getItem("hash");

// waitUntilSuccess("/api/" + hash + "/DeepTMHMM", 5000, 500, 80)
//     .then((res) => {
//         content.innerHTML = "<img src='" + '/api/' + hash + "/DeepTMHMM/plot.png" + "'>"
//         console.log(res)
//     },
//         () => {
//             console.log("Timeout or server error.")
//         })

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
    if (hash) {
        waitUntilSuccessAsync("/api/" + hash + "/DeepTMHMM", 5000, 500, 80)
            .then((obj) => {
                deepTMHMM = document.getElementById("transmembrane_topology");
                deepTMHMM.querySelector("#topology").innerText =
                    obj["/predicted_topologies.3line"].substr(61);
                deepTMHMM.querySelector("#statistic").innerText =
                    obj["/TMRs.gff3"];
                deepTMHMM.querySelector("#topology_img").src =
                    "/api/" + hash + "/DeepTMHMM/plot.png";
            })
            .catch((err) => {
                console.log(err);
            });

        waitUntilSuccessAsync("/api/" + hash + "/JPred", 5000, 500, 80)
            .then((obj) => {
                $("#JPred").innerHTML = obj["svg"];
                [...$$(".title > svg > rect")].map((x) => {
                    x.style["fill-opacity"] = 0;
                });
                $(".align > svg > rect.st1").style["fillOpacity"] = 0;
                $(".align > svg > rect.st2").style["fillOpacity"] = 0;
                $(".align > svg").setAttribute("width", $(".align > svg").getAttribute("width") - 50); // svg 的本身宽度，由于右侧有空白进行调整
                $(".align > svg").setAttribute("height", 217);
                $(".title").style["width"] = "80px";
                $(".align").style["overflow"] = "auto";
                $(".st0").style['display'] = "flex";
                $(".st0").style.width = window.innerWidth - $(".st0").offsetLeft - 300 + "px"
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

(function () {
    var divs = [...$("#content").children];
    $$(".leftside .buttons .li")[1].click();
    divs.map((x) => {
        x.hidden = true;
    });
    divs[1].hidden = false;
    applyResult(hash);
})();


