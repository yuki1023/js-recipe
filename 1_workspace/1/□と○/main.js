const figure = document.getElementById("figure")
// const squareButton = document.getElementById("square-button")
// const circleButton = document.getElementById("circle-button")

// circleButton.onclick = function(){
// figure.classList.add("rounded")

// }

// squareButton.onclick = function(){
//     figure.classList.remove("rounded")

// }

figure.onclick = function() {
    figure.classList.toggle("rounded")
    // figure.classList.toggle("transition")
}
