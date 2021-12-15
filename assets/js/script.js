let flips = 0;
let counter = document.querySelector('.flips');
function moveCounter() {
    flips++;
    counter.innerHTML = `Flips: ${flips}`; 
}