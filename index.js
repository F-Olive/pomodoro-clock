// The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks - 5 minutes.
// User can see a timer for 25 minutes - the working session
// After the working session is over, the User can see a timer for 5 minutes - the break session
// User can start / pause, stop and reset the timers

// BONUS FATURES
// User can hear a sound playing when the timer hits 00:00 - denoting that the session has ended
// User can change / customize the minutes in both sessions before starting
// User can set a long break session of 10 minutes. This will be activated every 4th break session

// 1: Set the "Session Length" arrows up or down to set the '.time-remaining' to whatever is selected
// 2: 

let timeRemainingDisplay = document.querySelector('.time-remaining')
const startTimerBtn = document.getElementById('start-timer')
const pauseTimerBtn = document.getElementById('pause-timer')
const resetTimerBtn = document.getElementById('reset-timer')
const sessionTimeUp = document.getElementById("sessionTimeUp")
const sessionTimeDown = document.getElementById("sessionTimeDown")

let timeRemaning = "46:00"

function displayTimeRemaining() {
    timeRemainingDisplay.textContent = timeRemaning
}

displayTimeRemaining()