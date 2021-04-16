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

    if (figure.className === "transition square"){
        figure.classList.add("rounded")
    }else if (figure.className === "transition square rounded"){
        figure.classList.remove("rounded")
        figure.classList.remove("square")
        figure.classList.add("triangle")
    }else if(figure.className === "transition triangle") {
        figure.classList.remove("triangle")
        figure.classList.add("square")
    }

    

    
}
