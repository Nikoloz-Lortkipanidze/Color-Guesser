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
let startWindowText = document.querySelector('#startWindowText')

// Variables
let circlesCount = 4;
let colors;
let color;
let score = 0;
let timer = 60;

startGameBTN.addEventListener('click', function(){
    startWindow.style.display = 'none'
    startWindowText.innerText = 
    'Your game ended. Do you want to play the game again?'
    startGame()
});

function startGame(){
    resetStats()
    startTimer()
    newLevel()
}

newLevel()

function resetStats(){
    score = 0;
    timer = 60;
    Dom_Score.innerHTML = `Score: ${score}`
}

function newLevel(){
    generateCircles()
    setBackgroundColor()
}


function generateCircles(){
    /* Clear Circles Section */
    Section_Circles.innerHTML = ``

    levelControl()

    /* Generate & Store Colors */
    colors = generateRandomColors(circlesCount)
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
                correctCircle()
            } else { // incorrect
                wrongCircle()
            }
        } 

    }

    // update score
    Dom_Score.innerHTML = `Score: ${score}`

}

 function levelControl(){
     if (circlesCount != 12){ // set max circle count
        if (score == 4){
             circlesCount = 4
         } else if (score % 5 == 0){
             circlesCount = 4 + ( ( score / 5 ) * 2 )
             Section_Circles.style.gridTemplateColumns =
             `repeat(${circlesCount/2}, 1fr)`;
        }
 }
}

function correctCircle(){
    // audio
    const sound = new Audio('/Resources/Audio/Correct.mp3')
    sound.currentTime = 0.1
    sound.play()

    score++

    newLevel()
}

function wrongCircle(){
    // audio
    const sound = new Audio('/Resources/Audio/Wrong.mp3')
    sound.currentTime = 1
    sound.play()

    // animation 
    Section_GuessColor.style.border = '3px solid red'
    setTimeout(() => {
        Section_GuessColor.style.border = 'none'
    }, 500);

    score--
}

let timerInterval; // Declare globally

function startTimer() {
    clearInterval(timerInterval)
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
    clearInterval(timerInterval)
    startWindow.style.display = 'block'

    newLevel()
}

restartBTN.addEventListener('click', restartGame)
