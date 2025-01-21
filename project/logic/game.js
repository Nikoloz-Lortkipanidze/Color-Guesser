// Sections
let startWindow = document.querySelector('.startWindow')
let Section_GuessColor = document.querySelector('.Section_GuessTheColor')
let Section_Circles = document.querySelector('.Section_ColorCircles')

// Buttons
let startGameBTN = document.querySelector('#startGameBTN')
let restartBTN = document.querySelector('#restartBTN')

// Other Dom Components
let Dom_Score = document.querySelector('#Dom_Score') 
let Dom_timer = document.querySelector('#Dom_timer') 

// Variables
let circlesCount = 4;
let colors;
let color;
let score = 0;
let timer = 3;

startGameBTN.addEventListener('click', function(){
    startWindow.style.display = 'none'
    startGame()
});

function startGame(){
    startTimer()
    newLevel()
}

newLevel()

function newLevel(){
    generateCircles()
    setBackgroundColor()
}


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
    if (startWindow.style.display == 'none'){
        if (timer > 0){
            if (this.style.backgroundColor == color){ // correct
                score++
                newLevel()
            } else { // incorrect
                score--
            }
        } 
    }

    // update score
    Dom_Score.innerHTML = `Score: ${score}`

}

let timerInterval; // Declare globally

function startTimer() {

    if (timer > 0) {
        timerInterval = setInterval(() => {
            if (timer > 10) {
                timer--;
                Dom_timer.innerHTML = `Time: 00:${timer}`
            }
            else if (timer > 0){
                timer--;
                Dom_timer.innerHTML = `Time: 00:0${timer}`
            }
            else {
                clearInterval(timerInterval) // Stop the interval when timer hits 0
                restartGame()
            }
        }, 1000);
    } 
}

function restartGame(){
    startWindow.style.display = 'block'

    score = 0;
    timer = 60;
    Dom_Score.innerHTML = `Score: ${score}`

    newLevel()
}

restartBTN.addEventListener('click', restartGame)
