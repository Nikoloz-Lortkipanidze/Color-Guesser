// Sections
let startWindow = document.querySelector('.startWindow')
let Section_GuessColor = document.querySelector('.Section_GuessTheColor')
let Section_Circles = document.querySelector('.Section_ColorCircles')

// Buttons
let startGameBTN = document.querySelector('#startGameBTN')
let restartBTN = document.querySelector('#restartBTN')

// Other Dom Components
let Dom_Score = document.querySelector('#Dom_Score ') 

// Variables
let circlesCount = 4;
let colors;
let color;
let score = 0;
let time = 60;

startGameBTN.addEventListener('click', function(){
    startWindow.style.display = 'none'
    startGame()
});

function startGame(){
    generateCircles()
    setBackgroundColor()
}

startGame()

function generateCircles(){
    /* Clear Circles Section */
    Section_Circles.innerHTML = ``

    /* Generate & Store Colors */
    colors = generateRandomColors(4)
    color = getRandomElement(colors)

    /* Create Circles */
    for (let i = 0; i < circlesCount; i++){
        let circle = document.createElement('div')
        circle.className = 'circle'
        circle.addEventListener('click', checkCircleColor)
        circle.style.backgroundColor = colors[i]
        Section_Circles.appendChild(circle)
    }
}

function setBackgroundColor(){
    Section_GuessColor.style.backgroundColor = color
}

function checkCircleColor(){ 
    if (this.style.backgroundColor == color){ // correct
        score++
    } else { // incorrect
        score--
    }

    // update score
    Dom_Score.innerHTML = `Score: ${score}`

    startGame()
}

function restartGame(){
    // Update Score
    score = 0;
    time = 60;
    Dom_Score.innerHTML = `Score: ${score}`

    startGame()
}

restartBTN.addEventListener('click', restartGame)
