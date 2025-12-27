// if you want to build a server with Node.js alone, you’ll have to write a lot of repetitive and complex code for common tasks like routing, handling requests, parsing data, and sending responses.
//express is a node.js framework that ->helps in creating servers easily
// ->making routing simple
// ->Easy to handle requests and responses
// to install express ->npm i express
const express=require('express')
const app=express();
const port=4000;
// do localhost:4000 in web browser
app.use(express.static('public'));
// get() function is used to define routes on your server that handle HTTP GET requests. A GET request is typically used when the client asks the server to send back some information, like retrieving a webpage or data from a database.
// app.get,post,put,delete->(path,handler)

app.get('/',(req,res)=>{
    res.send("Hello world 3");
})
// localhost:4000/about
app.get('/about',(req,res)=>{
    res.send('about me');
})
// these are end points when we add it in end of localhost:port/endpoints then text inside res.send appears

app.get('/contact',(req,res)=>{
    res.send('you can contact me')
})
// for these we have to write code multiple times to do it in one time we can use below syntax
app.get('/:first',(req,res)=>{
    // console.log(req);
    console.log(req.params)
    console.log("between")
    console.log(req.query)

    res.send(`hello ${req.params.first}`);
})
// req.params fetch the variable like first
app.listen(port,()=>{
    console.log(`Example app working in port ${port}`)
})
// app.listen(port, callback)
// app.listen is used to start the server and make it listen for incoming req on the specific port
// there are queries in req object if we can pass it to our url like ?mode=dark & region =in
// type ctr+c to write on terminal