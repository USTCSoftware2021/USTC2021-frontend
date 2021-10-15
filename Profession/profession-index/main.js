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


inputBtn.addEventListener("click", () => {
    var sequence  = input.value.toUpperCase()
    if (checkSequece(sequence)) {
        saveSequence()
        sendSequence()
        window.location.href = "../profession-main" 
    }
})

function saveSequence(){
    saveinput = JSON.parse(localStorage.getItem("cards"))
    if (saveinput) {
        saveinput.push(input.value)
    }
    localStorage.setItem("cards", JSON.stringify(saveinput))
}

function checkSequece(sequence){
    return /^[ACDEFGHIKLMNPQRSTUVWY\s]+$/i.test(sequence)
}

function sendSequence(){
    postData('/api', {
        sequence: input.value,
        tasks: {
            CellPLoc: true,
            DeepTMHMM: true,
            JPred: true,
            IPC2: true
        }
    })
        .then(data => {
            localStorage.setItem("hash", data.hash)
        })
        .catch(error => console.error(error))
}
