var sec=0;
var tens=0;
var secondit=document.getElementById('seconds')
var tenit=document.getElementById('tens')
var start=document.getElementById('start')
var stopit=document.getElementById('stop')
var reset=document.getElementById('reset')
var Interval;

start.onclick=function() {
    clearInterval(Interval)
    Interval= setInterval(startTimer,10);
}

stopit.onclick= function() {
    clearInterval(Interval);
}

reset.onclick= function() {
    clearInterval(Interval)
     sec="00";
     tens="00"
    tenit.innerText=tens;
    secondit.innerText=sec;
}


function startTimer(){
    tens++;
  if(tens<9){
      tenit.innerText="0"+tens;
  }

  if(tens > 9){
    tenit.innerText=tens;    
  }
  if(tens >99){
      sec++;
      secondit.innerText="0"+sec;
      tens=0;
      tenit.innerText="0"+0;
  }
  if(sec >9){
      secondit.innerText=sec;
       }
}
