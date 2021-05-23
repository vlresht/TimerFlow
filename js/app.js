var countdownElement = document.querySelector("#countdown");
var startButton = document.querySelector("#start-button");
var stopButton = document.querySelector("#stop-button");

var timerStarted;

startButton.addEventListener('click', function() {
    
    workMinutes = document.querySelector("#work-time-input").value; 
    workSeconds = 0;
    breakMinutes = document.querySelector("#break-time-input").value;
    breakSeconds = 0;

    workMinutesCopy = workMinutes;
    workSecondsCopy = workSeconds;
    breakMinutesCopy = breakMinutes;
    breakSecondsCopy = breakSeconds;

    if (timerStarted === undefined) {
        timerStarted = setInterval(startTimer, 1000);
    }
    else {
        alert("already going!");
    }
})


stopButton.addEventListener('click', function() {
    stopTimer();
    timerStarted = undefined;
})


function startTimer() {

    // work
    if (workSeconds != 0) {
        workSeconds--;
        if (workSeconds < 10) {
            workSeconds = "0" + workSeconds;
        }
        countdownElement.innerHTML = `${workMinutes}:${workSeconds}`;
    }
    else if(workMinutes != 0 && workSeconds == 0) {
        workSeconds = 59;
        workMinutes--;
        if (workSeconds < 10) {
            workSeconds = "0" + workSeconds;
        }
        countdownElement.innerHTML = `${workMinutes}:${workSeconds}`;
    }

    // break
    if (workMinutes == 0 && workSeconds == 0) {
        if (breakSeconds != 0) {
            breakSeconds--;
            if (breakSeconds < 10) {
                breakSeconds = "0" + breakSeconds;
            }
            countdownElement.innerHTML = `${breakMinutes}:${breakSeconds}`;
        } else if (breakMinutes != 0 && breakSeconds == 0) {
            breakSeconds = 59;
            breakMinutes--;
            if (breakSeconds < 10) {
                breakSeconds = "0" + breakSeconds;
                countdownElement.innerHTML = `${breakMinutes}:${breakSeconds}`;
            }
        }
    }

    // reset
    if (workMinutes == 0 && workSeconds == 0 && breakMinutes == 0 && breakSeconds == 0) {
        workMinutes = workMinutesCopy;
        workSeconds = workSecondsCopy;
        breakMinutes = breakMinutesCopy;
        breakSeconds = breakSecondsCopy;
    }
}


function stopTimer() {
    clearInterval(timerStarted);
}