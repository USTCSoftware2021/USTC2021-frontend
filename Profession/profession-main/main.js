var $_ = (x) => document.querySelector(x);
var $$ = (x) => document.querySelectorAll(x);

var SVGs = {
    plant: null,
    hum: null,
    eukaryotic: null,
    gneg: null,
    gpos: null,
};

var plant = {
    cls: [
        "Extracell",
        "Cytoplasm",
        "CellWall",
        "PlasmaMembrane",
        "Nucleus",
        "Mitochondria",
        "EndoplasmicReticulum",
        "Chloroplast",
        "Peroxisome",
        "Vacuole",
        "Plastid",
    ],
    re: [
        /Extracell/i,
        /Cytoplasm/i,
        /wall/i,
        /membrane/i,
        /nucleus/i,
        /Mitochondria/i,
        /Reticulum/i,
        /Chloroplast/i,
        /Peroxisome/i,
        /Vacuole/i,
        /Plastid/i,
    ],
};

var hum = {
    cls: [
        "Extracell",
        "Cytoplasm",
        "PlasmaMembrane",
        "Synapse",
        "Nucleus",
        "Mitochondria",
        "EndoplasmicReticulum",
        "Peroxisome",
        "Plastid",
        "Cytoskeleton",
        "Lysosome",
        "GolgiApparatus",
        "Microsome",
        "Centriole",
        "Endosomal",
    ],
    re: [
        /Extracell/i,
        /Cytoplasm/i,
        /PlasmaMembrane/i,
        /Synapse/i,
        /Nucleus/i,
        /Mitochondrion/i,
        /EndoplasmicReticulum/i,
        /Peroxisome/i,
        /Plastid/i,
        /Cytoskeleton/i,
        /Lysosome/i,
        /GolgiApparatus/i,
        /Microsome/i,
        /Centriole/i,
        /Endosomal/i,
    ],
};

var hash = localStorage.getItem("hash");

// waitUntilSuccess("/api/" + hash + "/DeepTMHMM/", 5000, 500, 80)
//     .then((res) => {
//         content.innerHTML = "<img src='" + '/api/' + hash + "/DeepTMHMM/plot.png" + "'>"
//         console.log(res)
//     },
//         () => {
//             console.log("Timeout or server error.")
//         })

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

function applyResult(hash) {
    if (hash) {
        waitUntilSuccessAsync("/api/" + hash + "/DeepTMHMM/", 5000, 500, 80)
            .then((obj) => {
                $_("#transmembrane_topology > .waiting").hidden = true;
                deepTMHMM = $_("#transmembrane_topology");
                deepTMHMM.querySelector("#topology").innerText =
                    obj["/predicted_topologies.3line"].substr(61);
                deepTMHMM.querySelector("#statistic").innerText =
                    obj["/TMRs.gff3"];
                deepTMHMM.querySelector("#topology_img").src =
                    "/api/" + hash + "/DeepTMHMM/plot.png";
                $_("#transmembrane_topology > .result").hidden = false;
            })
            .catch((err) => {
                console.log(err);
            });

        waitUntilSuccessAsync("/api/" + hash + "/JPred/", 5000, 500, 80)
            .then((obj) => {
                $_("#secondary_structure > .waiting").hidden = true;
                $_("#JPred").innerHTML = obj["svg"];
                [...$$(".title > svg > rect")].map((x) => {
                    x.style["fill-opacity"] = 0;
                });
                $_(".align > svg > rect.st1").style["fillOpacity"] = 0;
                $_(".align > svg > rect.st2").style["fillOpacity"] = 0;
                $_(".align > svg").setAttribute(
                    "width",
                    $_(".align > svg").getAttribute("width") - 50
                ); // svg 的本身宽度，由于右侧有空白进行调整
                $_(".align > svg").setAttribute("height", 217);
                $_(".title").style["width"] = "80px";
                $_(".align").style["overflow"] = "auto";
                $_(".st0").style["display"] = "flex";
                $_(".st0").style.width =
                    window.innerWidth - $_(".st0").offsetLeft - 300 + "px";
                $_("#secondary_structure > .result").hidden = false;
            })
            .catch((err) => {
                console.log(err);
            });
        waitUntilSuccessAsync("/api/" + hash + "/IPC2/", 5000, 500, 80).then(
            (obj) => {
                $_("#isoelectric_point > .waiting").hidden = true;
                $_("#isopoint").innerText = obj["protein"]["protein"];
                $_("#isoelectric_point > .result").hidden = false;
            }
        );
        // loadCellPLoc();
    }
}

function loadCellPLoc(cell) {
    waitUntilSuccessAsync("/api/" + hash + "/CellPLoc/", 5000, 500, 80).then(
        (obj) => {
            $_("#subcellular_localization > .waiting").hidden = true;
            eval(cell).re.map((re, index) => {
                if (re.test(obj[cell])) {
                    showClass(eval(cell).cls[index], SVGs[cell]);
                }
            });
            SVGs[cell].classList.remove("cell-hidden");
        }
    );
}

function showUniqueCellPLoc() {
    if (!$_("select").value) {
        $_("#subcellular_localization > .waiting").hidden = false;
    }
    for (i in SVGs) {
        if (i === $_("select").value) {
            $_("#subcellular_localization > .waiting").hidden = true;
            $_("#" + i + "_cell").classList.remove("cell-hidden");
        } else {
            $_("#" + i + "_cell").classList.add("cell-hidden");
        }
    }
}

function manageSVG() {
    $_("#plant_cell").addEventListener(
        "load",
        () => {
            SVGs.plant = $_("#plant_cell").getSVGDocument();
            hideAllClassOfSVG(plant.cls, SVGs.plant);
            loadCellPLoc("plant");
        },
        false
    );
    $_("#hum_cell").addEventListener(
        "load",
        () => {
            SVGs.hum = $_("#hum_cell").getSVGDocument();
            hideAllClassOfSVG(hum.cls, SVGs.hum);
            loadCellPLoc("hum");
        },
        false
    );
}

function hideAllClassOfSVG(cls, svg) {
    cls.map((c) => {
        [...svg.querySelectorAll("." + c)].map((elem) => {
            elem.setAttribute("visibility", "hidden");
        });
    });
}

function showClass(c, svg) {
    [...svg.querySelectorAll("." + c)].map((elem) => {
        elem.removeAttribute("visibility");
    });
}

(function () {
    var divs = [...$_("#content").children];
    $$(".leftside .buttons .li")[0].click();
    divs.map((x) => {
        x.hidden = true;
    });
    divs[0].hidden = false;
    manageSVG();
    applyResult(hash);
})();
