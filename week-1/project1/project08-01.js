"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Elliot Block
      Date: 3/20/25

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

function Timer(min,sec){
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

Timer.prototype.runPause = function(timer, minBox, secBox){
  if (timer.timeID){
  //stop
    clearInterval(timer.timeID);
    timer.timeID = null;

  } else {
     //start
      timer.timeID= setInterval(function() {
        countdown(timer, minBox, secBox);
      }, 1000);
      }
    };

  //decrease
  function countdown (timer, minBox, secBox){
    if (timer.seconds > 0){
      timer.seconds--;
    } else if (timer.minutes > 0){
      timer.minutes--;
      timer.seconds = 59;
    } else {
    //timer 00
      clearInterval(timer.timeID);
      timer.timeID = null;
    }
    //update
    minBox.value = timer.minutes;
    secBox.value = timer.seconds;
  }


/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

let myTimer = new Timer(Number(minBox.value), Number(secBox.value));

minBox.onchange = function (){
  myTimer.minutes = Number(minBox.value);
};

secBox.onchange = function(){
  myTimer.seconds = Number(secBox.value);
};

runPauseTimer.onclick = function(){
  myTimer.runPause(myTimer,minBox,secBox);
};

