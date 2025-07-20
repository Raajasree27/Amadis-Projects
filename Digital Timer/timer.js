let time=5*60;
let intervalId;
let running=false;

const displayElement=document.querySelector(".content");
const startBtn=document.getElementById("startBtn");
const stopBtn=document.getElementById("stopBtn");
const clearBtn=document.getElementById("clearBtn");

function updateDisplay(){
    const hour=Math.floor(time/ 36000);
    const mins=Math.floor((time%3600)/60);
    const sec=Math.floor(time%60);
    displayElement.textContent=`${hour.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
}

const saveToSession = (timeSec)=>{
    const recent = JSON.parse(sessionStorage.getItem("recentTimers")) || [];
    recent.push(timeSec);
    sessionStorage.setItem("recentTimers",JSON.stringify(recent));
}

const startTimer = async () => {
  if (running) return;
  running=true;
  intervalId = setInterval(() => {
    if (time > 0){
      time--;
      updateDisplay();
    }else{
        clearInterval(intervalId);
        running=false;
        alert("Time's up!");
        stopBtn.textContent="Stop";
    }
  }, 1000);
};

function stopTimer(){
    if(running)
    {
        clearInterval(intervalId);
        running=false;
        stopBtn.textContent="Resume";
    }
    else{
        startTimer();
        stopBtn.textContent="Stop";
    }
}

function clearTimer(){
    clearInterval(intervalId);
    running=false;
    saveToSession(time);
    time=5*60;
    updateDisplay();
    stopBtn.textContent="Stop";
}

startBtn.addEventListener("click",startTimer);
stopBtn.addEventListener("click",stopTimer);
clearBtn.addEventListener("click",clearTimer);
updateDisplay();