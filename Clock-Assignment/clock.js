let main = document.getElementById("main-frame");
let clock = document.createElement("div");
clock.classList = "w-100 h-100 rounded-full m-10 p-5 text-center bg-blue-300 border-4 shadow-2xl font-bold font-4xl justify-items-center content-center";
setInterval(()=>{
    clock.innerHTML = "";
    let timeStamp = new Date();
    clock.innerText = timeStamp;
},1000);
main.appendChild(clock);


let clock1 = document.getElementById("clock");
let stopwatch = document.getElementById("clock2");
let i=0;
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
setInterval(() => {
    clock1.innerHTML = "";
    let timeStamp = new Date();
    let date = document.createElement("h1");
    date.innerText = timeStamp.toLocaleDateString();
    let day = document.createElement("h1");
    day.innerText = days[timeStamp.getDay()];
    let time = document.createElement("h1");
    time.innerText = timeStamp.toLocaleTimeString();
    clock1.appendChild(date);
    clock1.appendChild(day);
    clock1.appendChild(time);
}, 1000);
let startButton = document.createElement("button");
startButton.innerText = "Start";
startButton.classList = "font-bold bg-green-200 text-red-700 p-5 m-5 border-2";
startButton.addEventListener("click", () => {
  setInterval(() => {
    let time = new Date().toLocaleTimeString();
    timeBox.innerText = time;
  }, 1000);
});
let lapButton = document.createElement("button");
lapButton.innerText = "Lap";
lapButton.classList = "font-bold text-red-700 bg-red-200 p-5 m-5 border-2";
lapButton.addEventListener("click", () => {
  lapBox.innerText = lapBox.innerText + "  " + new Date().toLocaleTimeString();
});
let timeBox = document.createElement("div");
timeBox.classList = "border-2 bg-green-200 m-10 p-5 w-100";
let lapBox = document.createElement("div");
lapBox.classList = "border-2 bg-red-200 m-10 p-5 w-100";
stopwatch.appendChild(startButton);
stopwatch.appendChild(lapButton);
stopwatch.appendChild(timeBox);
stopwatch.appendChild(lapBox);

