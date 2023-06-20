let timerInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  document.getElementById("hours").textContent = padTime(hours);
  document.getElementById("minutes").textContent = padTime(minutes);
  document.getElementById("seconds").textContent = padTime(seconds);
}

function padTime(time) {
  return time.toString().padStart(2, "0");
}
