var barWord = document.getElementsByClassName("barword")
var barWordA = document.getElementsByClassName("barworda")
var content = document.getElementById("content")

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

var hash = localStorage.getItem("hash")

url = '/api/' + hash + "/DeepTMHMM/plot.png"

content.innerHTML = "<img src='" + url + "'>"

// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         content.innerHTML = `
            
//         `
//     })
