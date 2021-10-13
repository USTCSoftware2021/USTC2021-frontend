var barWord = document.getElementsByClassName("barword")
var barWordA = document.getElementsByClassName("barworda")
var next = document.getElementById("next")
var changeTds = document.getElementsByClassName("change")
var tds = document.getElementsByTagName("td")
var nextFalse = document.getElementById("nextFalse")
var flag = 1
var temp1
var temp
var sum = 0

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

next.addEventListener("click", () => {
    window.location.href = "../CNN3/index.html"
})  


function changeTdsValue(){
    for(let i = 0; i < tds.length; i++){
        tds[i].addEventListener("click", () => {
            if(tds[i].innerText == "0"){
                tds[i].innerText = "1"
            }
            else{
                tds[i].innerText = "0"
            }
            for(let j = 0; j < changeTds.length; j++){
                flag = 1
                if(changeTds[j].innerText == "0"){
                    flag = 0
                    break
                }
            }
            if(flag == 1){
                temp = Array.from(tds)
                temp1 = temp.map(x => parseInt(x.innerText))
                for(let k = 0; k < temp1.length; k++)
                    if(!isNaN(temp1[k]))
                        sum++
                if(sum == 36){
                    flag = 1
                }
                else{
                    flag = 0
                }
                sum = 0
            }
            if(flag == 1)
                {
                    nextFalse.style.display = "none"
                    next.style.display = "flex"
                }
        })       
    }
}

// 11 17 22 30 41 47

changeTdsValue()
