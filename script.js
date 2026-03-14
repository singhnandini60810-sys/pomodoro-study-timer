let minutes = 25;
let seconds = 0;
let timer;
let sessions = 0;
let isBreak = false;

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const progress = document.getElementById("progress");
const sessionsDisplay = document.getElementById("sessions");
const alarm = document.getElementById("alarm");

function updateDisplay(){
minutesDisplay.textContent = minutes.toString().padStart(2,"0");
secondsDisplay.textContent = seconds.toString().padStart(2,"0");
}

function startTimer(){

if(timer) return;

timer = setInterval(()=>{

if(seconds === 0){

if(minutes === 0){

alarm.play();

if(!isBreak){
sessions++;
sessionsDisplay.textContent = sessions;
minutes = 5;
isBreak = true;
alert("Break Time!");
}
else{
minutes = 25;
isBreak = false;
alert("Study Time!");
}

seconds = 0;
return;
}

minutes--;
seconds = 59;
}
else{
seconds--;
}

let totalTime = isBreak ? 300 : 1500;
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

minutes = 25;
seconds = 0;
isBreak = false;

progress.style.width = "0%";

updateDisplay();
}

function toggleDarkMode(){
document.body.classList.toggle("dark-mode");
}

updateDisplay();
