var barWord = document.getElementsByClassName("barword")
var barWordA = document.getElementsByClassName("barworda")
var img4 = document.getElementById("img4")
img4.addEventListener("click", () => {
    window.location.href = "../../FourModels/index.html"
})
var x = document.getElementById("x")
x.addEventListener("click", () => {
    window.location.href = "../../FourModels/index.html"
})
for(let i = 0; i < 4; i++){
    barWord[i].addEventListener("mouseover", () => {
        barWord[i].style.background = "white"
        barWord[i].style.cursor = "pointer"
        barWordA[i].style.color = "black"

    })
    barWord[i].addEventListener("mouseout", () => {
        // console.log("ok");
        barWord[i].style.background = "black"
        barWordA[i].style.color = "white"
    })
    barWordA[i].addEventListener("mouseover", () => {
        barWord[i].style.background = "white"
        barWordA[i].style.color = "black"
    })
    barWordA[i].addEventListener("mouseout", () => {
        barWordA[i].style.color = "white"
        barWord[i].style.background = "black"
    })
}

var kbuttons = document.getElementsByClassName("kbutton")
var charts = document.getElementsByClassName("chart")
var btnbasecolor = "#10E0D0"
var magcolor = "#FF00FF"
var cyacolor = "#00FFFF"
var lavcolor = "#807FFF"
var mag = document.getElementById("magenta")
var cya = document.getElementById("cyan")
var lav = document.getElementById("lavender")
cya.style.color = "white"
cya.style.backgroundColor = cyacolor
kbuttons[0].style.color = "white"
kbuttons[0].style.backgroundColor = btnbasecolor
for(let i = 0; i < 4; i++){
    kbuttons[i].addEventListener("click", () => {
        if(i == 0 || i == 1){
            mag.style.color = magcolor
            mag.style.backgroundColor = "white"
            cya.style.color = "white"
            cya.style.backgroundColor = cyacolor
            lav.style.color = lavcolor
            lav.style.backgroundColor = "white"
        }
        else if(i == 2){
            mag.style.color = magcolor
            mag.style.backgroundColor = "white"
            cya.style.color = "white"
            cya.style.backgroundColor = cyacolor
            lav.style.color = "white"
            lav.style.backgroundColor = lavcolor
        }
        else{
            mag.style.color = magcolor
            mag.style.backgroundColor = "white"
            cya.style.color = cyacolor
            cya.style.backgroundColor = "white"
            lav.style.color = "white"
            lav.style.backgroundColor = lavcolor
        }
        kbuttons[i].style.color = "white"
        kbuttons[i].style.backgroundColor = btnbasecolor
        charts[i].style.display = "inline"
        for(let j = 0; j < 4; j++){
            if(j == i)continue
            kbuttons[j].style.color = btnbasecolor
            kbuttons[j].style.backgroundColor = "white"
            charts[j].style.display = "none"
        }
    })
}

    
