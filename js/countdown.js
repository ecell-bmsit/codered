// countdown.js

// let endDate = new Date('2023-12-20T00:00:00').getTime();
// let endDate = new Date('2023-12-23T19:00:00').getTime();

let startDate = new Date('2023-12-23T15:00:00').getTime();
let endDate = new Date('2024-01-04T23:59:59').getTime();   
let started = false;
let finished = false;
let timeLeft = calculateTimeToStart();
let timeRemaining = calculateTimeRemaining();

function formatTimeComponent(value) {
  return value < 10 ? '0' + value : value;
}

function calculateTimeToStart() {
  const currentTime = Date.now();
  const remaining = Math.max(0, startDate - currentTime);
  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

  return `${formatTimeComponent(days)}:${formatTimeComponent(hours)}:${formatTimeComponent(minutes)}:${formatTimeComponent(seconds)}`;
}

function calculateTimeRemaining() {
  const currentTime = Date.now();
  const remaining = Math.max(0, endDate - currentTime);
  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

  return `${formatTimeComponent(days)}:${formatTimeComponent(hours)}:${formatTimeComponent(minutes)}:${formatTimeComponent(seconds)}`;
}

function updateCountdown() {
  const countdownText = document.getElementById('countdownText');
  if (started && !finished) {
    countdownText.innerHTML = `
      <p class="countdown-text">
        <span class="countdown-label">Registrations will end in</span>
        <span class="countdown-time">${timeRemaining}</span>
      </p>`;
  } else if (!started && !finished) {
    countdownText.innerHTML = `
      <p class="countdown-text">
        <span class="countdown-label">Registrations will start in</span>
        <span class="countdown-time">${timeLeft}</span>
      </p>`;
  } else if (finished) {
    countdownText.innerHTML = `
      <p class="countdown-text">
        <span class="countdown-label">⌛ Registrations Closed</span>
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
    if (timeRemaining === '00:00:00:00') {
      clearInterval(timer);
      finished = true;
    }
    updateCountdown();
  }, 1000);
}

updateTimer();