const instructions = document.getElementById('instructions');
const hint = document.getElementById('hint');
const gameStats = document.getElementById('gameStats');
const radioBtnDiv = document.getElementById('restartBtn');
const restartBtn = document.getElementById('restart');
const randWidth = Math.floor(Math.random() * window.innerWidth);
const randHeight = Math.floor(Math.random() * window.innerHeight);
let bestScore = localStorage.getItem('bestScore') == null ? MAX_VALUE : localStorage.getItem('bestScore');
let numOfClicks = 0;
let gameOver = false;

restartBtn.addEventListener('click', e => {
    document.location.reload();
});

document.addEventListener('click', e => {
    if (gameOver) return;

    instructions.style.visibility = 'hidden';

    const clickedWidth = e.clientX; 
    const clickedHeight = e.clientY;
    numOfClicks++;

    if (Math.abs(randWidth - clickedWidth) < 50 && Math.abs(randHeight - clickedHeight) < 50) {
        gameOver = true;
        hint.innerHTML = "";
        gameStats.innerHTML = `The pixel location was ${randWidth}x${randHeight}.<br>Your winning guess was ${clickedWidth}x${clickedHeight}.`;

        if (numOfClicks < bestScore) {
            localStorage.setItem('bestScore', numOfClicks);
            gameStats.innerHTML += `<br>New Best Score: ${numOfClicks}`;
        } else {
            gameStats.innerHTML += `<br>Score: ${numOfClicks}<br>Previous Best Score: ${bestScore}`;
        }

        radioBtnDiv.style.visibility = 'visible';
    } else if (Math.abs(randWidth - clickedWidth) < 100 && Math.abs(randHeight - clickedHeight) < 100) {
        hint.innerHTML = `ON FIRE!!!`;
    } else if (Math.abs(randWidth - clickedWidth) < 200 && Math.abs(randHeight - clickedHeight) < 200) {
        hint.innerHTML = `HOT!`;
    } else if (Math.abs(randWidth - clickedWidth) < 300 && Math.abs(randHeight - clickedHeight) < 300) {
        hint.innerHTML = `Warm`;
    } else if (Math.abs(randWidth - clickedWidth) < 500 && Math.abs(randHeight - clickedHeight) < 500) {
        hint.innerHTML = `Cold`;
    } else {
        hint.innerHTML = `Freezing!`;
    }
});