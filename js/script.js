/*
1000ms = 1s
60s = 1m
60m = 1hr
24hr = 1day
*/
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

// get current full year
const currentYear = new Date().getFullYear();
// get new year date
const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);

function updateTime() {
  const currentDate = new Date();

  // find how many days for new year,diff newyear -currentyear

  const diff = newYear - currentDate;
  // get date
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  // get hour
  const h = Math.floor((diff / 1000 / 60 / 60) % 24);
  // get minutes
  const m = Math.floor((diff / 1000 / 60) % 60);
  // get seconds
  const s = Math.floor((diff / 1000) % 60);
  days.innerHTML = d < 10 ? "0" + d : d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
  
  // perfect alignment: fixes slow seconds
  setTimeout(updateTime, 1000 - (Date.now() % 1000));
}

updateTime();
