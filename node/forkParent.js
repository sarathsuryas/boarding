const { fork } = require('child_process');

// List of data for processing
const tasks = [5, 10, 15, 20, 25];

// Array to store child processes
const children = [];

// Function to process each task using child processes
function startTaskProcessing() {
  tasks.forEach((task, index) => {
    const child = fork('forkChild.js'); // Create a new child process

    // Send the task data to the child process
    child.send({ taskData: task });

    // Store the child process in an array for later communication
    children.push(child);

    // Listen for messages from the child process
    child.on('message', (message) => {
      console.log(`Parent received from Child ${index + 1}:`, message.result);
      child.kill();  // Terminate the child process once it finishes
    });

    // Handle any errors from the child process
    child.on('error', (err) => {
      console.error(`Error from Child ${index + 1}:`, err);
    });

    // Handle the child process exit
    child.on('exit', (code) => {
      console.log(`Child ${index + 1} exited with code ${code}`);
    });
  });
}

// Start task processing
startTaskProcessing();
