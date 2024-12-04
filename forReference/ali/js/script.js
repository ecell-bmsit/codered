AOS.init();

// Countdown Timer Script
const countdownDate = new Date("2024-12-31T23:59:59").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown-hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("countdown-minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("countdown-seconds").innerText = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".countdown-timer").innerHTML = "EXPIRED";
    }
}, 1000);
