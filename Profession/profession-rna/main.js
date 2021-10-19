var barWord = document.getElementsByClassName("barword")
var barWordA = document.getElementsByClassName("barworda")
var inputBtn = document.getElementsByClassName("btn-border")[0]
var input = document.getElementById("input")
var saveinput = []

for (let i = 0; i < 4; i++) {
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

function saveRNA(){
    if (checkSequece(input.value)) {
        localStorage.setItem("RNA", input.value)
    }
}

function checkSequece(sequence){
    return /^[ACGTU]{1,100}$/i.test(sequence)
}

function go() { 
    saveRNA()
    window.location.href = "../profession-rna-main/"
}
