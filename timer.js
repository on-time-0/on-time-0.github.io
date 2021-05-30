// Set the date we're counting down to
let countDownDate = new Date("Aug 1, 2021 12:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(() => {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24)),
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
  seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days.startPad(2, 0) + ":" + hours.startPad(2, 0) + ":" + minutes.startPad(2, 0) + ":" + seconds.startPad(2, 0);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
