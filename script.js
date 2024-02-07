function updateCounter() {
    const startDate = new Date('2022-08-09');
    const now = new Date();

    const totalSeconds = Math.floor((now - startDate) / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = totalSeconds % 60;

    const formattedTime = `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;
    document.getElementById('daysCounter').innerText = formattedTime;
}

// Update the count every second
setInterval(updateCounter, 1000);

document.addEventListener('DOMContentLoaded', updateCounter);
