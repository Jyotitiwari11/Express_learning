const express = require('express')
const blog = require('./routes/blog')
const cat = require('./routes/jyoti')


const app = express()
const port = 3000

app.use(express.static("public"));

// this means the /blog endpoint request will be handled by this router
// go to routes folder
app.use('/blog', blog);
app.use('/jt', cat);
// app.get,post,put,delete->(path,handler)
// get->get the data

app.get('/', (req, res) => {
  console.log("hey");
  res.send('Hello World hi!');
})
// post->data create->send data to server from client to create something
// like when you submit a registration form on a website.
// get request also has char limit and we can't pass confidential info in it
// post can be check by putting an html file in public section like i have done in mypage.html
// but there is a better way to download postman check the post put etc
// GET → Retrieve data
// POST → Create data
// PUT → Update data
// DELETE → Remove data
app.post('/', (req, res) => {
  console.log("Hey this is post request");
  res.send('Hello World hi post!');
})
// put->used to update data
app.put('/', (req, res) => {
  console.log("Hey this is put request");
  res.send('Hello World hi put!');
})
// delete the data
app.delete('/', (req, res) => {
  console.log("it is delete");
  res.send("this is delete");
})

//   to check post req is working or not we make file named mypage.html in public folder

app.listen(port, () => {
  console.log(`Example app working in port ${port}`)
})

app.get("/index", (req, res) => {
  console.log("html file runing")
  res.sendFile('templates/index.html', { root: __dirname });
  // res.send("hi i am browser")
  // to run index.html file we also have to give dirname otherwise it will give error
})
app.get('/api', (req, res) => {
  res.json({ a: 1, b: 2 });
})
// JSON, or JavaScript Object Notation, is a widely used data format for storing and exchanging data in a human-readable and machine-parsable way.used for transferring data between a server and a web application
// nodemon express2.js->to restart every time automatically

// there are diff types of requests in express->get req,post req,put,delete
// get req->it is a type of request that a cilent makes to get some data from the server
// post req->it is used to send data from cilent side to server side

