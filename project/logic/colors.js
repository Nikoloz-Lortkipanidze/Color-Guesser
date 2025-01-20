function generateRandomColors(colorsCount){
    let randomColors = []

    for (let i = 0; i < colorsCount; i++){
        let r = Math.round( Math.random() * 255 );
        let g = Math.round( Math.random() * 255 );
        let b = Math.round( Math.random() * 255 );
        randomColors.push( `rgb(${r}, ${g}, ${b})` );
    }

    return randomColors
}

function getRandomElement(array){
    let randomNum = Math.floor( Math.random() * array.length );
    
    return array[randomNum]
}


