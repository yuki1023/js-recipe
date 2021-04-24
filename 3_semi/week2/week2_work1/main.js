const inputElement = document.getElementById("memo-input");
const container = document.getElementById("memo-container");
const addButton = document.getElementById("add-button");


addButton.onclick = function () {
    const text = inputElement.value
  
    
    // list.push(text)
    // localStorage.list = JSON.stringify(list)
  
    console.log(text)

    const card = document.createElement("div")
    card.className = "pokemon"
    card.textContent = text
    container.append(card)
  
    inputElement.value = ""
  };