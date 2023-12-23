// countdown.js

// let endDate = new Date('2023-12-20T00:00:00').getTime();
// let endDate = new Date('2023-12-24T00:00:00').getTime();


let startDate = new Date('2023-12-23T15:00:00').getTime();
let endDate = new Date('2024-01-05T23:59:59').getTime();   
let started = false;
let finished = false;
let timeLeft = calculateTimeToStart();
let timeRemaining = calculateTimeRemaining();

function calculateTimeToStart() {
  const currentTime = Date.now();
  const remaining = Math.max(0, startDate - currentTime);
  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

  return `${days < 1 ? '00' : ''}:${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function calculateTimeRemaining() {
  const currentTime = Date.now();
  const remaining = Math.max(0, endDate - currentTime);
  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

  return `${days}:${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
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
    if (timeRemaining === '0d 00:00:00') {
      clearInterval(timer);
      finished = true;
    }
    updateCountdown();
  }, 1000);
}

updateTimer();
