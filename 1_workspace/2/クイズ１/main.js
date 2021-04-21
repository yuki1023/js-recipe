const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")

// choice1.onclick = function() {
//     feedback.textContent =
//       "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
//   }
//   choice2.onclick = function() {
//     feedback.textContent =
//       "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
//   }
//   choice3.onclick = function() {
//     feedback.textContent = "正解！ガニメデは、木星の第三惑星だよ！"
//   }

// クイズの内容
const quiz ={
    text:"この画像は誰でしょう？？",
    image:"manatsu.jpeg",
    choices:[
        
        {
            text:"白石麻衣",
            feedback:"残念！白石麻衣はもっと美人だよ！",

        },
        {
            text:"秋元真夏",
            feedback:"正解！まなったんでしたぁ〜〜❤︎",

        },
        {
            text:"松村沙友理",
            feedback:"残念！松村沙友理はもっと可愛いよ！！",

        },
        {
            text:"斎藤飛鳥",
            feedback:"残念！斎藤飛鳥はもっとおバカだよ！！",

        },
    ],


}


// クイズを画面に表示する関数
const reloadQuiz = function(){
    // 問題文を表示
    quizText.textContent = "Q,"+ quiz.text
    // 画像を表示
    quizImage.src = "./images/" + quiz.image
    // 選択肢の中身を表示
    choice1.textContent = quiz.choices[0].text
    console.log(choice1.textContent)
    choice2.textContent = quiz.choices[1].text
    choice3.textContent = quiz.choices[2].text
    choice4.textContent = quiz.choices[3].text
}


// 正解を判定する
const choose = function(choiceNumber) {
    feedback.textContent = quiz.choices[choiceNumber].feedback
  }

// ここでchooseStringに入力値を代入している
choice1.onclick = function() {
    // ゴリアテを選択
    choose(0)
  }
  choice2.onclick = function() {
    // ゼニガメを選択
    choose(1)
  }
  choice3.onclick = function() {
    // ガニメデを選択
    choose(2)


  }

  choice4.onclick = function() {
    // ガニメデを選択
    choose(3)
  }

  // reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
  
