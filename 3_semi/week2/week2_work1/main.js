
      const input = document.getElementById("memo-input")
      const button = document.getElementById("add-button")
      const memo = document.getElementById("memo-container")
      let memos = []
      if (localStorage.memo1) {
        const memosJson = localStorage.memo1
        memos = JSON.parse(memosJson)
        for (let i = 0; i < memos.length; i++) {
          const div = document.createElement("div")
          div.className = "pokemonn"
          div.textContent = memos[i]
          memo.append(div)
        }
      }
      console.log(memos)
      button.onclick = function() {
        const text = input.value
        memos.push(text)
        input.value = ""
        console.log(memos)
        localStorage.memo1 = JSON.stringify(memos)
        const div = document.createElement("div")
        div.className = "pokemonn"
        div.textContent = text
        memo.append(div)
      }
    