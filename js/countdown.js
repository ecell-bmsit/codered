// let endDate = new Date('2023-12-20T00:00:00').getTime();
// let endDate = new Date('2023-12-22T00:00:00').getTime();

let startDate = new Date('2023-12-22T13:00:00').getTime();
let endDate = new Date('2024-1-14T00:00:00').getTime();   
let started = false;
let finished = false;
let timeLeft = calculateTimeToStart();
let timeRemaining = calculateTimeRemaining();

function calculateTimeToStart() {
  const currentTime = Date.now();
  const remaining = Math.max(0, startDate - currentTime);
  const seconds = Math.floor(remaining / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function calculateTimeRemaining() {
  const currentTime = Date.now();
  const remaining = Math.max(0, endDate - currentTime);
  const seconds = Math.floor(remaining / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function updateCountdown() {
  const countdownText = document.getElementById('countdownText');
  if (started && !finished) {
    countdownText.innerHTML = `
      <p class="countdown-text">
        <span class="countdown-label">Hackathon will end in</span>
        <span class="countdown-time">${timeRemaining}</span>
      </p>`;
  } else if (!started && !finished) {
    countdownText.innerHTML = `
      <p class="countdown-text">
        <span class="countdown-label">Hackathon will start in</span>
        <span class="countdown-time">${timeLeft}</span>
      </p>`;
  } else if (finished) {
    countdownText.innerHTML = `
      <p class="countdown-text">
        <span class="countdown-label">⌛ Time's up</span>
      </p>`;
  }
}

function updateTimer() {
  const timer = setInterval(() => {
    timeLeft = calculateTimeToStart();
    timeRemaining = calculateTimeRemaining();
    if (Date.now() >= startDate) {
      started = true;
    }
    if (timeRemaining === '00:00:00') {
      clearInterval(timer);
      finished = true;
    }
    updateCountdown();
  }, 1000);
}

updateTimer();
