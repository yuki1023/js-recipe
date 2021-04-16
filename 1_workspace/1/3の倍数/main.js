// ％ (剰余)
// 引数 number を受け取る関数
const FizzBuzzFunction = function(number){
    // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
    for (let n=1; n<=number; n++) {
      var num = String(n)
      var num2 = num.indexOf("3")
      if (n % 15 === 0){
        console.log("FizzBuzz")
      }else if(n % 3 === 0) {
        console.log(`Fizz`)
      } else if (n % 5 === 0) {
        console.log("Buzz")
      }if (num2 !== -1){
        console.log("!!!!!!!!")
      }else{
          console.log(n)
      } 

    }
  }

