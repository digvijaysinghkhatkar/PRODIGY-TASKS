// Variables
let startTime = 0;          // Start time in milliseconds
let elapsedTime = 0;        // Total elapsed time
let timerInterval;          // Interval ID for updating the timer

// Elements
const display = document.getElementById('timer-display');
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');

// Format time into HH:MM:SS.mmm
function formatTime(ms) {
  const date = new Date(ms);
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

// Start the stopwatch
function startStopwatch() {
  startTime = Date.now() - elapsedTime; // Adjust start time
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
  }, 10);

  // Update button states
  startButton.disabled = true;
  pauseButton.disabled = false;
  resetButton.disabled = false;
}

// Pause the stopwatch
function pauseStopwatch() {
  clearInterval(timerInterval); // Stop the interval
  startButton.disabled = false;
  pauseButton.disabled = true;
}

// Reset the stopwatch
function resetStopwatch() {
  clearInterval(timerInterval); // Stop the interval
  elapsedTime = 0;              // Reset elapsed time
  display.textContent = '00:00:00.000'; // Reset display

  // Reset button states
  startButton.disabled = false;
  pauseButton.disabled = true;
  resetButton.disabled = true;
}

// Event Listeners
startButton.addEventListener('click', startStopwatch);
pauseButton.addEventListener('click', pauseStopwatch);
resetButton.addEventListener('click', resetStopwatch);
