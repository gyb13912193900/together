function updateCounter() {
    // 设置起始时间为中国时间2022年8月9日0时0分0秒
    // Date.UTC() 返回的是UTC时间，中国时间为UTC+8，因此需要加上8小时的毫秒数
    const startDate = new Date(Date.UTC(2022, 7, 9) + 8 * 60 * 60 * 1000);

    // 获取当前时间的UTC时间
    const now = new Date();
    const nowUTC = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds()));

    // 计算时间差
    const diff = nowUTC - startDate;

    // 计算天数、小时数、分钟数和秒数
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // 更新页面元素
    document.getElementById('days').innerText = `${days} Days`;
    document.getElementById('hours').innerText = `${hours} Hours`;
    document.getElementById('minutes').innerText = `${minutes} Minutes`;
    document.getElementById('seconds').innerText = `${seconds} Seconds`;
}

// 更新计时器每秒钟一次
setInterval(updateCounter, 1000);

// 初次调用以初始化显示
updateCounter();
