var startTime;
var elapsedTime = 0;
var timerInterval;

const display = document.getElementById("display");

function timeToString(time) {
  const date = new Date(time);
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(date.getUTCSeconds()).padStart(2, "0");
  const milliseconds = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, "0");
  return `${minutes}:${seconds}:${milliseconds}`;
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = timeToString(elapsedTime);
  }, 10);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  display.textContent = "00:00:00";
  elapsedTime = 0;
}

// Event listeners
document.getElementById("startBtn").addEventListener("click", startTime);
document.getElementById("stopBtn").addEventListener("click", stopTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
