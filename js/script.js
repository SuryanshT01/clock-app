const clock = document.getElementById('time');
const stopTime = document.getElementById('stop-time');
const startTime = document.getElementById('start-time');

function showTime(){
    const currentTime = new Date()
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    clock.innerText = time;
}
let interval = setInterval(showTime,1000);

stopTime.addEventListener('click',() => {
    clearInterval(interval);
});

startTime.addEventListener('click',() => {
    interval = setInterval(showTime,1000);
});