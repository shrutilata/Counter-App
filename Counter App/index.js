let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") 

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}


function save() {
    let entry = count + " - "
    saveEl.innerText += entry
    countEl.textContent = 0
    count = 0
}



