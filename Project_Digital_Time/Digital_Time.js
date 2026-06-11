console.log("Haleema")
const time = document.getElementById('time');


//this is a digital time
setInterval(function () {
  let date = new Date();
  time.innerHTML = date.toLocaleTimeString();
}, 1000);

