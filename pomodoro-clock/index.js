const startClock = getSelector('#startBtn')
const killSwitch = getSelector('#killClock')
const resetClockSelect = getSelector('#resetClock')
const countDown = getSelector('#countdown')
const endTime = getSelector('#endTime')
const alerts = getSelector('#alerts')

let sessionCount = 5;
let clockTimeRemaining;
let breakTimeRemaining;
let timer;
let breakTimer;
let minInputWork;
let minEndTimeBreak;
let startDate;
let sessionTime;

function loadClock(){
  startDate = Date.now()
  minInputWork = convertToMillies(parseInt(getSelector('#work').value))
  minEndTimeBreak = convertToMillies(parseInt(getSelector('#break').value))
  const endTimeTotal = startDate + (minInputWork + minEndTimeBreak) * 5
  displayEndTime(endTimeTotal)
  clock()
}

function clock() {
  if(sessionCount > 0) {
    startWorking();
    sessionCount = sessionCount - 1;
    alerts.textContent = ''
    countDown.textContent = '0:00'
  } else {
    sessionCount = 5
    endTime.textContent = ''
    countDown.textContent = '0:00'
    alerts.textContent = `Click 'Start' button to start again`
  }
}

function startWorking (){
  sessionTime = Date.now()
  if (sessionCount < 0) {
    clearInterval(timer);
    console.log('called timer sessionCount')
  }
  timer = setInterval(() => {
    clockTimeRemaining = Math.floor((getEndDate(sessionTime, minInputWork) - Date.now())/1000); // Seconds
    console.log('working time: ', clockTimeRemaining)
    if (clockTimeRemaining === 0) {
      clearInterval(timer);
      startBreak(sessionTime);
    }
    getTime(clockTimeRemaining)
  }, 1000);
}


function startBreak(sessionTime) {
  if (sessionCount < 0) {
    clearInterval(breakTimer);
    console.log('called breakTimer sessionCount')
  }
  breakTimer = setInterval(() => {
    breakTimeRemaining = Math.floor((getEndBreakDate(sessionTime, minInputWork, minEndTimeBreak) - Date.now())/1000);
    console.log('break time: ', breakTimeRemaining)
    if (breakTimeRemaining === 0) {
      clearInterval(breakTimer);
      clock()
    }

    getTime(breakTimeRemaining)

  }, 1000);

}
/* getTime and displayEndTime are courtesy of JS30 @ Wes Bos: Thank you for the amazing video on clocks! */
function getTime (seconds) {
  const minutes = Math.floor(seconds/60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? "0":""}${remainderSeconds}`
  document.title = display
  countDown.textContent = display
}
function displayEndTime (timestamp) {
  const end = new Date (timestamp)
  const hours = end.getHours()
  const minutes = end.getMinutes()
  endTime.textContent = `Your Pomodoro Timer will end at ${hours}:${minutes < 10 ? "0":""}${minutes} `
}
/* getTime and displayEndTime are courtesy of JS30 @ Wes Bos: Thank you for the amazing video on clocks! */


function resetClock() {
  sessionCount = 5
  countDown.textContent = '0:00'
  endTime.textContent = ''
  alerts.textContent = `Pomodoro Reset! Start Again`
  clearInterval(timer);
  clearInterval(breakTimer);
  console.log(sessionCount)
}
function killClock (){
  sessionCount = 0
  clearInterval(timer);
  clearInterval(breakTimer);
  clock()
}

function getEndDate(startDate, minInputWork) {
  return startDate + minInputWork;
}

function getEndBreakDate(startDate, minInputWork, minEndTimeBreak) {
  return startDate + minInputWork + minEndTimeBreak;
}

function convertToMillies(minutes){
  return minutes * 60000
}

// Listeners
startClock.addEventListener('click', loadClock)
killSwitch.addEventListener('click', killClock)
resetClockSelect.addEventListener('click', resetClock)

// Utility
function getSelector(cssSelect){
	return document.querySelector(cssSelect)
}