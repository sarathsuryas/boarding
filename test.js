// worker.js
const { parentPort, workerData } = require('worker_threads');
parentPort.on('message', (data) => {
  const result = heavyTask(data.task);
  parentPort.postMessage(result); // Send back
}); 

function heavyTask(task) {
  return workerData.start + 100; // Example CPU work
}