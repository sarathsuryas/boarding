// Listen for messages from the parent process
process.on('message', (message) => {
    console.log('Child received task data:', message.taskData);
  
    // Simulate a heavy computation (e.g., some mathematical operation)
    const result = message.taskData * 2;
  
    // Send the result back to the parent
    process.send({ result: result });
  
    // Optionally, you can terminate the child process when done
    process.exit(0);
  });
  