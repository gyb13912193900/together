function updateCounter() {
    // 中国时间偏差 (UTC+8)
    const timezoneOffset = 8 * 60; // 8小时，以分钟为单位
    const startDateUTC = new Date(Date.UTC(2022, 7, 9)); // 注意月份从0开始，所以7代表8月
    const now = new Date();

    // 转换现在的时间为中国时间
    const nowChinaTime = new Date(now.getTime() + (now.getTimezoneOffset() + timezoneOffset) * 60000);

    const diff = nowChinaTime - startDateUTC;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const formattedTime = `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;
    document.getElementById('daysCounter').innerText = formattedTime;
}

// 更新计时器每秒钟一次
setInterval(updateCounter, 1000);

// 初次调用以初始化显示
updateCounter();
