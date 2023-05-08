function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId = '';

stopBtn.setAttribute('disabled', 'true');

startBtn.addEventListener('click', handleStartClick);
stopBtn.addEventListener('click', handleStopClick);

function handleStartClick() {
  intervalId = setInterval(() => {
    changeColor();
  }, 1000);

  startBtn.setAttribute('disabled', 'true');
  stopBtn.removeAttribute('disabled');
}

function handleStopClick() {
  clearInterval(intervalId);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', 'true');
}
function changeColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
}
