const instructions = document.getElementById('instructions');
const hint = document.getElementById('hint');
const gameStats = document.getElementById('gameStats');
const radioBtnDiv = document.getElementById('restartBtn');
const restartBtn = document.getElementById('restart');
const randWidth = Math.floor(Math.random() * window.innerWidth);
const randHeight = Math.floor(Math.random() * window.innerHeight);
let bestScore = localStorage.getItem('bestScore');
let numOfClicks = 0;
let gameOver = false;

restartBtn.addEventListener('click', (e) => {
  document.location.reload();
});

document.addEventListener('click', (e) => {
  if (gameOver) return;

  instructions.style.visibility = 'hidden';

  const clickedWidth = e.clientX;
  const clickedHeight = e.clientY;
  numOfClicks++;

  if (
    Math.abs(randWidth - clickedWidth) < window.innerWidth / 32 &&
    Math.abs(randHeight - clickedHeight) < window.innerHeight / 32
  ) {
    gameOver = true;
    hint.innerHTML = '';
    gameStats.style.visibility = 'visible';
    gameStats.innerHTML = `Pixel Location: ${randWidth}x${randHeight}<br>Winning Guess: ${clickedWidth}x${clickedHeight}`;

    if (bestScore == null || numOfClicks < bestScore) {
      localStorage.setItem('bestScore', numOfClicks);
      gameStats.innerHTML += `<br>New Best Score: ${numOfClicks}`;
    } else {
      gameStats.innerHTML += `<br>Score: ${numOfClicks}<br>Previous Best Score: ${bestScore}`;
    }

    radioBtnDiv.style.visibility = 'visible';
  } else if (
    Math.abs(randWidth - clickedWidth) < window.innerWidth / 16 &&
    Math.abs(randHeight - clickedHeight) < window.innerHeight / 16
  ) {
    hint.innerHTML = `ON FIRE!!!`;
  } else if (
    Math.abs(randWidth - clickedWidth) < window.innerWidth / 8 &&
    Math.abs(randHeight - clickedHeight) < window.innerHeight / 8
  ) {
    hint.innerHTML = `HOT!`;
  } else if (
    Math.abs(randWidth - clickedWidth) < window.innerWidth / 4 &&
    Math.abs(randHeight - clickedHeight) < window.innerHeight / 4
  ) {
    hint.innerHTML = `Warm`;
  } else if (
    Math.abs(randWidth - clickedWidth) < window.innerWidth / 2 &&
    Math.abs(randHeight - clickedHeight) < window.innerHeight / 2
  ) {
    hint.innerHTML = `Cold`;
  } else {
    hint.innerHTML = `Freezing!`;
  }
});
