//your JS code here. If required.
// Get the required element from the HTML document
const outputDiv = document.getElementById('output');

// Create a function that returns a promise which resolves with a string after a delay
function delayedMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 1000); // Delay of 1 second (1000 milliseconds)
  });
}

// Call the delayedMessage function and update the output div with the resolved message
delayedMessage().then((message) => {
  outputDiv.textContent = message;
});
