var barWord = document.getElementsByClassName("barword")
var barWordA = document.getElementsByClassName("barworda")

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

myimgout = document.getElementById("imgout")
myimgin = document.getElementById("imgin")
content = document.getElementById("content")

content.onmouseover=function(){
    myimgout.style.display="none"
    myimgin.style.display="inline"
}
content.onmouseout=function(){
    myimgout.style.display="inline"
    myimgin.style.display="none"
}