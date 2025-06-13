const express = require('express');
const app = express();
app.get('/api',(req,res)=>{
  res.format({
    'text/plain': () => {
      res.send('Hello, world! This is plain text.');
    },
    'text/html': () => {
      res.send('<html><body><p>Hello, world! This is HTML.</p></body></html>');
    },
    'application/json': () => {
      res.json({ message: 'Hello, world! This is JSON.' });
    },
    'default': () => {
      // If none of the requested types is supported, return 406 Not Acceptable.
      res.status(406).send('Not Acceptable');
    }
  });
})
app.get("/data",(req,res)=>{
  if(req.accepts("application/json")) {
    res.status(200).json({message:'jsong'})
  } else if(req.accepts("text/html")) {
    res.status(200).send('<h1>html</h1>')
  }
})

app.listen(3000, () => console.log('Server running on port 3000'));
