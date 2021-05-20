document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.querySelector("#countdown");
    const startButton = document.querySelector("#start-button");
    
    function startTimer() {
        let time = document.querySelector("#work-time-input").value * 60;
        setInterval(function() {
            if (time <= 0) {
                clearInterval(time = 0);
            }
            const minutes = Math.floor(time / 60);
            let seconds = time % 60;
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            countdownElement.innerHTML = `${minutes}:${seconds}`;
            time--;
        }, 1000)
    }

    startButton.addEventListener('click', startTimer);
})