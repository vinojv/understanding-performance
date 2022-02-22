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

function foo() {
  document.getElementById("text").innerText = "started";
  console.log("Started");
  for (let i = 0; i < 1000; i += 1) {
    bar();
  }
  console.log("Ended");
  document.getElementById("text").innerText = "ended, lets start again";
}
window.foo = foo;

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  <button onclick="foo()"> clickme </button>
  <p id='text'>
  click above button to start
  </p>
</div>
`;
