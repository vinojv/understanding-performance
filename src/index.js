import "./styles.css";

/**
 * Performance issues
 * 1. Code taking long time to finish blocking code
 * 2. Code trying to keep rendering some part of the screen without releasing UI thread
 * 3. Code storing / generating huge data and processing them
 *
 */

function bar() {
  let delay = Math.random() * 100;
  do {
    delay = Math.random() * 100;
    console.log("delay");
  } while (delay > 100);
}

function longerProcessingTime() {
  document.getElementById("text").innerText = "started";
  console.log("Started");
  for (let i = 0; i < 10000; i += 1) {
    bar();
  }
  console.log("Ended");
  document.getElementById("text").innerText = "ended, lets start again";
}

function continuouslyRendering() {
  for (let i = 0; i < 100000; i += 1)
    document.getElementById("text").innerText =
      "started " + Math.random() * 1000;
}

function generateLargeData() {
  const data = Array(1000000).fill(0);
  const newData = data.map((i) => ({
    id: i,
    name: "name_" + i
  }));
  console.log(newData);
  document.getElementById("text").innerText = "done";
}

window.longerProcessingTime = longerProcessingTime;
window.continuouslyRendering = continuouslyRendering;
window.generateLargeData = generateLargeData;

document.getElementById("app").innerHTML = `
<h1>Understanding how to debug performance!</h1>
<div>
  <button onclick="longerProcessingTime()"> Code contiuously running for longtime </button>
  <br>
  <button onclick="continuouslyRendering()"> Code contiuously rendering </button>
  <br>
  <button onclick="generateLargeData()"> Code generating huge data </button>

  <p id='text'>
  click above button to start
  </p>
</div>
`;
