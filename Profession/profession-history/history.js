var list = []

// getData just gets one trow
function getData(){
    const newSequnences = JSON.parse(localStorage.getItem("cards"))
    console.log(newSequnences)
    if(newSequnences){
        for (i = 0; i < newSequnences.length; i++){
            var newCard = {Id: i + 1, Sequnence: newSequnences[i], Time: new Date()}
            list.push(newCard)
            // console.log(list)
        }
    }
}

getData()

function saveList(){
    localStorage.setItem("list", JSON.stringify(list))
}

saveList()

function showList(){
   list = JSON.parse(localStorage.getItem("list"))
}

showList()
    
window.onload = function(){  
    var tbody = document.getElementById('tbody') 
        
    for(var i = 0;i < list.length; i++){ 
        var trow = getDataRow(list[i])
        tbody.appendChild(trow)
    }  
        
}  
        
function getDataRow(h){  
    var row = document.createElement('tr')
       
    var idCell = document.createElement('td') 
    idCell.innerHTML = h.Id
    row.appendChild(idCell)

    var nameCell = document.createElement('td')
    nameCell.innerHTML = h.Sequnence
    row.appendChild(nameCell)
       
    var timeCell = document.createElement('td') 
    timeCell.innerHTML = h.Time
    row.appendChild(timeCell)
       

    var delCell = document.createElement('td')
    row.appendChild(delCell)
    var btnDel = document.createElement('input') 
    btnDel.setAttribute('type','button')   
    btnDel.setAttribute('value','Delete')  
    delCell.appendChild(btnDel)
    btnDel.addEventListener("click", () => {
        btnDel.parentNode.parentNode.remove()
        localStorage.clear()
        // window.location.reload()
        getData()
        saveList()
        showList()
    })
       
    return row  
}       


