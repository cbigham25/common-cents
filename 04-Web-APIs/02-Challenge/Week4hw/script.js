let duration = 60;
let timeDisplay = document.getElementById('timer');
let timer;

function updateTimer() {
    duration--;
    timerDisplay.textContent = duration;
    if (duration === 0) {
        clearInterval(timer);
        alert('Your times is up!')
    }
}

timer = setInterval(updateTimer, 1000);