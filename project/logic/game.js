let Section_Circles = document.querySelector('.Section_ColorCircles')

let circlesCount = 4;

function generateCircles(){
    /* Generate & Store Colors */
    let colors = generateRandomColors(4)
    let color = getRandomElement(colors)

    /* Create Circles */
    for (let i = 0; i < circlesCount; i++){
        let circle = document.createElement('div')
        circle.className = 'circle'
        circle.style.backgroundColor = colors[i]
        Section_Circles.appendChild(circle)
    }
}

generateCircles()