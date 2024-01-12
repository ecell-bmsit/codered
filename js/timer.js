 const targetDate = new Date('2024-01-13T10:45:00').getTime() + 24 * 60 * 60 * 1000;

        // Update the timer every second
        const timerInterval = setInterval(updateTimer, 1000);

        function updateTimer() {
            // Get the current date and time
            const currentDate = new Date().getTime();

            // Calculate the remaining time
            const remainingTime = targetDate - currentDate;

            if (remainingTime <= 0) {
                // Stop the timer when 24 hours are completed
                clearInterval(timerInterval);
                document.getElementById('timer').innerHTML = '00 : 00 : 00';
            } else {
                // Calculate hours, minutes, and seconds
                const hours = padZero(Math.floor(remainingTime / (1000 * 60 * 60)));
                const minutes = padZero(Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)));
                const seconds = padZero(Math.floor((remainingTime % (1000 * 60)) / 1000));

                // Format the time and update the timer element
                const formattedTime = ` ${hours}  : ${minutes} : ${seconds} `;
                document.getElementById('timer').innerHTML = formattedTime;
            }
        }

        
        function padZero(value) {
            // Add leading zero if the value is less than 10
            return value < 10 ? '0' + value : value;
        }

        // Initial call to set the timer immediately
        updateTimer();