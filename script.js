let minutes = 25;
let seconds = 0;
let timer = null;
let sessions = 0;
let isBreak = false;

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const progress = document.getElementById("progress");
const sessionsDisplay = document.getElementById("sessions");
const modeText = document.getElementById("modeText");
const alarm = document.getElementById("alarm");

const studyInput = document.getElementById("studyInput");
const breakInput = document.getElementById("breakInput");

function updateDisplay(){
minutesDisplay.textContent = minutes.toString().padStart(2,"0");
secondsDisplay.textContent = seconds.toString().padStart(2,"0");
}

function startTimer(){

if(timer) return;

if(!isBreak){
minutes = parseInt(studyInput.value);
seconds = 0;
}

timer = setInterval(()=>{

if(seconds === 0){

if(minutes === 0){

alarm.play();

if(!isBreak){

sessions++;
sessionsDisplay.textContent = sessions;

minutes = parseInt(breakInput.value);
seconds = 0;

isBreak = true;
modeText.textContent = "Break Mode";
alert("Break Time!");
}
else{

minutes = parseInt(studyInput.value);
seconds = 0;

isBreak = false;
modeText.textContent = "Study Mode";
alert("Study Time!");
}

return;
}

minutes--;
seconds = 59;

}else{
seconds--;
}

let totalTime = isBreak ? breakInput.value*60 : studyInput.value*60;
let timeLeft = minutes*60 + seconds;

progress.style.width = ((totalTime-timeLeft)/totalTime)*100 + "%";

updateDisplay();

},1000);
}

function pauseTimer(){
clearInterval(timer);
timer = null;
}

function resetTimer(){

clearInterval(timer);
timer = null;

minutes = parseInt(studyInput.value);
seconds = 0;
isBreak = false;

modeText.textContent = "Study Mode";
progress.style.width = "0%";

updateDisplay();
}

function toggleDarkMode(){
document.body.classList.toggle("dark-mode");
}

updateDisplay();
