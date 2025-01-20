let Section_GuessColor = document.querySelector('.Section_GuessTheColor')
let Section_Circles = document.querySelector('.Section_ColorCircles')

let circlesCount = 4;
let colors;
let color;

function startGame(){
    generateCircles()
    setBackgroundColor()
}

function generateCircles(){
    /* Generate & Store Colors */
    colors = generateRandomColors(4)
    color = getRandomElement(colors)

    /* Create Circles */
    for (let i = 0; i < circlesCount; i++){
        let circle = document.createElement('div')
        circle.className = 'circle'
        circle.style.backgroundColor = colors[i]
        Section_Circles.appendChild(circle)
    }
}

function setBackgroundColor(){
    Section_GuessColor.style.backgroundColor = color
}

startGame()