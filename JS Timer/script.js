let timerInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let timerRunning = false;

function startTimer() {
  if (!timerRunning) {
    hours = parseInt(document.getElementById("hours").value, 10);
    minutes = parseInt(document.getElementById("minutes").value, 10);
    seconds = parseInt(document.getElementById("seconds").value, 10);

    timerInterval = setInterval(updateTimer, 1000);
    timerRunning = true;
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  timerRunning = false;
  updateTimerDisplay();
}

function updateTimer() {
  if (seconds > 0) {
    seconds--;
  } else {
    if (minutes > 0) {
      minutes--;
      seconds = 59;
    } else {
      if (hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
      } else {
        clearInterval(timerInterval);
        timerRunning = false;
        return;
      }
    }
  }

  updateTimerDisplay();
}

function updateTimerDisplay() {
  document.getElementById("hours").value = padTime(hours);
  document.getElementById("minutes").value = padTime(minutes);
  document.getElementById("seconds").value = padTime(seconds);
}

function padTime(time) {
  return time.toString().padStart(2, "0");
}
