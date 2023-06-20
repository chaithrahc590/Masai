let stopwatchInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let stopwatchRunning = false;

function startStopwatch() {
  if (!stopwatchRunning) {
    stopwatchInterval = setInterval(updateStopwatch, 10);
    stopwatchRunning = true;
  }
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  stopwatchRunning = false;
  updateStopwatchDisplay();
}

function updateStopwatch() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    seconds++;
    milliseconds = 0;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
      if (minutes === 60) {
        hours++;
        minutes = 0;
      }
    }
  }

  updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
  document.getElementById("hours").textContent = padTime(hours);
  document.getElementById("minutes").textContent = padTime(minutes);
  document.getElementById("seconds").textContent = padTime(seconds);
  document.getElementById("milliseconds").textContent = padTime(milliseconds);
}

function padTime(time) {
  return time.toString().padStart(2, "0");
}
