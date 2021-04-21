const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")



addButton.onclick = function(){
    // カードを作成する
  const card = createCard(inputElement.value)
  container.append(card)

    // 入力欄をからにする
    inputElement.text = ""

   
}

// 共通の処理：テキストからカードを作成する
// inputElement.value = text
const createCard = function(text){
     // cardを作成("div"ちょっとわかんないかも)="タグ名"
     const card = document.createElement("div")
     card.className = "card"
     
 
     // todoを作成
     const todo = document.createElement("div")
     todo.className = "todo"
     todo.textContent = text
 
     // todoをカードの中に追加
     card.append(todo)
 
     // カードをcontainerの中に追加
     container.append(card)
 
     
     
     // 削除ボタン を作成
     const deleteButton = document.createElement("div")
     deleteButton.className = "delete"
 
     // 削除ボタン を押したときの処理を登録
     deleteButton.onclick = function() {
     // カードを削除する
     card.remove()
     }
     // 削除ボタン を card の中に追加する
     card.append(deleteButton)
 
     return text


}



