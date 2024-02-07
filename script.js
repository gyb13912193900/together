function updateCounter() {
    const startDate = new Date('2022-08-09T00:00:00');
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const formattedTime = `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;
    document.getElementById('daysCounter').innerText = formattedTime;
}

setInterval(updateCounter, 1000);
