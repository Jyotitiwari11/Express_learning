
const express=require('express')
const app=express();
const port=4000;

app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.send("Hello world 3");
})




app.listen(port,()=>{
    console.log(`Example app working in port ${port}`)
})
