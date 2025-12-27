// middleware in node.js has access to req and res object and they can modify the req response obj and 
// and the next middleware function in the application's request-response cycle
const express=require('express')
const app=express();
const port=4000;
const fs=require('fs')


// middleware
// app.use(express.static('public'));
// do localhost:4000/jt.txt;->this is will display text in jt.txt in public folder
// to use our own middleware make a function in app.use
// next in this is for next middleware function
// middleware1
// if we don't use next it will not go to next middleware and it stuck in loop
app.use((req,res,next)=>{
    // res.send("i am middleware 1")
    console.log(req.headers)
    req.jyoti="my name is jyoti"
    fs.appendFileSync('now.txt',`${Date.now()} ${req.method}`)
    console.log(`${Date.now()} ${req.method}`);
    next();

})
// middleware 2
app.use((req,res,next)=>{
    req.jyoti="my name is changed in 2nd middleware"
    console.log("i am 2nd")
    next()
})
app.get('/',(req,res)=>{
    res.send("hello")
})
app.get('/about',(req,res)=>{
    res.send("csk vs srh where srh won"+req.jyoti);
})
app.listen(port,()=>{
    console.log(`Example app working in port ${port}`)
})
// types of middleware->application level->made using app.use
// router level->works for specific router for ex used in express2
// error-handling middleware->for handling error->takes 4 
// built-in middleware->like static
// 3 rd party middleware->created by others that we can install via npm and use directly — instead of writing them ourselves.