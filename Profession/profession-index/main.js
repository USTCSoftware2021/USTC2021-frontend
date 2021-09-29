var barWord = document.getElementsByClassName("barword")
var barWordA = document.getElementsByClassName("barworda")
var inputBtn = document.getElementsByClassName("btn-border")[0]
var input = document.getElementsByClassName("search")[0]

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
    postData('/api', {sequence: input.value})
        .then(data => console.log(data)) // JSON from `response.json()` call
        .catch(error => console.error(error))
})

function postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
    headers: {
        'content-type': 'application/json'
      },
  })
  .then(response => response.json()) // parses response to JSON
}


