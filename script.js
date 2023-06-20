var hour = document.getElementById("hour");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

function getSecondsSinceStartOfDay() {
  return new Date().getSeconds() +
  new Date().getMinutes() * 60 +
  new Date().getHours() * 3600;
}

setInterval( function() {
  var time = getSecondsSinceStartOfDay();
  console.log(time);

  /*

  (time % x) /y *z + 180

  time % x,
      time represents number of seconds since day started
      x is number of seconds for each dial  to complete the circle (43200 seconds in 12 hours which is full circle for hours)
  time % x - determines how many seconds have passed since each dail started new circle

  /y - divides reminder with number of seconds needed to make one increment for each dail
        (dail for hours will move one hour every 3600 seconds)

  *z - multiplies by number of degrees each dail will move for every increment (when we divide full circle 360 degrees by 12 number of hours needed to complete circle, we get the number of degrees dail for hours will move each hour)

  +180 - is value added to every dial to rotate dails, because starting point for these dails was at 6 o'clock instead 12 (simply adding 180 degrees rotates  dial   to correct position)


  43200/3600*30=360
  3600/60*6=360
  60*6=360

  */
  hour.style.transform = `rotate(${(time % 43200) /3600*30+180}deg)`
  minutes.style.transform = `rotate(${(time % 3600) /60*6+180}deg)`
  seconds.style.transform = `rotate(${(time % 60) *6+180}deg)`
}, 1000);
