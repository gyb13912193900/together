document.addEventListener('DOMContentLoaded', function () {
    const startDate = new Date('2022-08-09');
    const today = new Date();
    const oneDay = 24 * 60 * 60 * 1000; // 小时*分钟*秒*毫秒
    const diffDays = Math.round(Math.abs((today - startDate) / oneDay));

    document.getElementById('daysCounter').innerText = `Day ${diffDays}`;
});
