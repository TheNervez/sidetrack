/*VARIABLES*/
var darkblue = "#232d42";
var darkbrown = "#8D4B32";

var timeleft = 0;
var minleft = 0;
var secleft = 0;

var timercounting = false;
var timerinterval;
/*FUNCTIONS*/
function startcount(time) {
  timercounting = true
  timeleft = time;
  timerinterval = setInterval(function() {
    minleft = Math.floor(timeleft / 60);
    secleft = timeleft - (minleft * 60);
    if (minleft < 10) {minleft = "0" + minleft}
    if (secleft < 10) {secleft = "0" + secleft}
    document.getElementById("countdown").innerHTML = minleft + ":" + secleft;
    timeleft--;
    if (timeleft < 0) {
      timercounting = false;
      clearInterval(timerinterval)
    }
  }, 1000)

  
}

function timer(action) {
  if (timercounting) {clearInterval(timerinterval)}
  if (action == "work") {
    document.getElementById("countdown").style.color = darkblue;
    startcount(1500);
  } else if (action == "rest") {
    document.getElementById("countdown").style.color = darkbrown;
    startcount(300);
  }
}
