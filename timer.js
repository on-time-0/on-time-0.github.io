// Set the date we're counting down to
let countDownDate = new Date("Aug 31, 2021 18:00:00 GMT-0800").getTime();

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
  document.getElementById("demo").innerHTML = String(days).padStart(2, 0) + ":" + String(hours).padStart(2, 0) + ":" + String(minutes).padStart(2, 0) + ":" + String(seconds).padStart(2, 0);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "LMAO SERVER IS DELETED";
  }
}, 1000);
