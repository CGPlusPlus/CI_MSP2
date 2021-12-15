let flips = 0;
let counter = document.querySelector('.flips');
function moveCounter() {
    flips++;
    counter.innerHTML = `Flips: ${flips}`; 

    // setting star rating based on number of moves: code from Sandra Israel https://github.com/sandraisrael/Memory-Game-fend/blob/master/js/app.js and modified
          if (flips > 34 && flips < 44) { // stars rating based on 34 flips and below 3 stars, 39 and 44 moves two stars and over 44 moves 1 star
        for (i = 0; i < 3; i++) {
            if (i > 1) {
                stars[i].style.visibility = "collapse";
            }
        }
    } else if (flips > 44) {
        for (i = 0; i < 3; i++) {
            if (i > 0) {
                stars[i].style.visibility = "collapse";
            }
        }
    }
}