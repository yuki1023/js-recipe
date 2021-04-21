const imageElement = document.getElementById("dog-image")

// 指定したサーバーにデータを取りに行く
fetch("https://api.thecatapi.com/v1/images/search")
  .then((res) => {

    return res.json() // 結果を json として読み込む
    
  })
  .then((data) => {
    imageElement.src = data[0].url // 画像を表示する
  })
