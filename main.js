const hint = document.getElementById('hint');
const instructions = document.getElementById('instructions');
const radioBtnDiv = document.getElementById('radioBtn');
const restartBtn = document.getElementById('restart');
const randWidth = Math.floor(Math.random() * (window.screen.width - 300) + 150);
const randHeight = Math.floor(Math.random() * (window.screen.height - 300) + 150);
let numOfClicks = 0;

restartBtn.addEventListener('click', e => {
    document.location.reload();
});

document.addEventListener('click', e => {
    instructions.style.visibility = 'hidden';

    const clickedWidth = e.clientX; 
    const clickedHeight = e.clientY;
    numOfClicks++;

    if (Math.abs(randWidth - clickedWidth) < 50 && Math.abs(randHeight - clickedHeight) < 50) {
        hint.innerHTML = `You won in ${numOfClicks} number of clicks!<br> The location was ${randWidth}x${randHeight}.<br> Your location guessed was ${clickedWidth}x${clickedHeight}.`;
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