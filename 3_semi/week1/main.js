    // ボタンを取得→displayを取得→ボタンを押したらdisplayの中に文字を代入
    const button1 = document.getElementById("choice1")
    const button2 = document.getElementById("choice2")
    const button3 = document.getElementById("choice3")
    const display = document.getElementById("display")

    const text = ["残念！白石麻衣はもっと美人だよ！","正解！まなったんでしたぁ〜〜❤︎","残念！松村沙友理はもっと可愛いよ！"]


    // const ansImg1 = document.createElement("img")
    // ansImg.src = "mai.jpeg"

    // const ansImg3 = document.createElement("img")
    // ansImg.src = "sayuri.jpeg"

    button1.onclick = function(){
      display.textContent = text[0]
      console.log("あ")
      display.appendChild(ansImg1)
    }
    button2.onclick = function(){
      display.textContent = text[1]
      console.log("い")
    }
    button3.onclick = function(){
      display.textContent = text[2]
      console.log("う")
      display.appendChild(ansImg3)
    }