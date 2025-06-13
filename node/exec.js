const { exec } = require('child_process')
/// accessing directory
exec('start edge',(error, stdout, stderr)=>{
    if(error) {
        console.error("error",error.message)
    }
    if(stderr) {
        console.error('stderrrrrrrrrrrr',stderr)
    }
    console.log(stdout)
})

// creating new file
exec('echo. > test.js',(error, stdout, stderr)=>{
    if(error) {
        console.error("error",error.message)
    }
    if(stderr) {
        console.error('stderrrrrrrrrrrr',stderr)
    }
    console.log(stdout)
})