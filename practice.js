const colors = ["red","blue","black","yellow"];



function randomInt(min,max) {
    min = 0,
    max = 4
    return Math.floor(Math.random()*(max - min))
}


function changeColor() {
    const change = colors[randomInt()]
    document.body.style.backgroundColor = change
}

