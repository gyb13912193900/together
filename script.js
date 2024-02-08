function updateCounter() {
    const startDate = new Date('2022-08-09T00:00:00+08:00'); // 中国标准时间 (UTC+8)
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').innerText = `${days} Days`;
    document.getElementById('hours').innerText = `${hours} Hours`;
    document.getElementById('minutes').innerText = `${minutes} Minutes`;
    document.getElementById('seconds').innerText = `${seconds} Seconds`;
}

setInterval(updateCounter, 1000);
