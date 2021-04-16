const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const multipliedButton = document.getElementById("multiplied-button")
let count = 0
plusButton.onclick = function(){
    // ここにクリック後の処理を書く
    // count を更新
  count += 1
  // count を表示
  display.textContent = count
}

minusButton.onclick = function(){
    // ここにクリック後の処理を書く
    // count を更新
  count -= 1
  // count を表示
  display.textContent = count
}

multipliedButton.onclick = function(){
    // ここにクリック後の処理を書く
    // count を更新
  count *= 2
  // count を表示
  display.textContent = count
}


  