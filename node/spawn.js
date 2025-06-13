const {spawn} = require('child_process')

const child = spawn('node',['test.js'])

child.stdout.on('data',(res)=>{
    console.log('data',res.toString())
})
child.stderr.on("data",(err)=>console.log(err+''))

child.on('exit',(data)=>console.log(data))