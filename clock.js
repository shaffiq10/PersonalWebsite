/* ================= DATE & CLOCK SCRIPT ================= */

// Function to display current date
function showDate() {
    const today = new Date(); // Create new date object

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    document.getElementById('date').innerHTML = today.toLocaleDateString('en-GB', options);
}

// Function to display live clock
function showClock() {
    const now = new Date(); // Get current time

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add zero in front of numbers less than 10
    if (hours < 10) { hours = '0' + hours; }
    if (minutes < 10) { minutes = '0' + minutes; }
    if (seconds < 10) { seconds = '0' + seconds; }

    const timeString = hours + ':' + minutes + ':' + seconds;

    document.getElementById('clock').innerHTML = timeString;
}

// Call functions when page loads
showDate();
showClock();

// Update clock every 1 second
setInterval(showClock, 1000);
