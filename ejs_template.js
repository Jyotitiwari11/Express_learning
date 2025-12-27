// ejs is emebedded js it is used in node.js to generate dynamic html content
const express = require('express')
const app = express();
const port = 4000;

app.set('view engine', 'ejs');
// it means we are using ejs template engine
app.use(express.static('public'))
app.get('/', (req, res) => {
    let sitename = "campus"
    let searchbar = "search now"
    let arr = [3, 4, "jyoti"]
    res.render('index', { sitename: sitename, searchbar: searchbar, arr })
    // we will use <%= searchbar %> to replace dynamic content this syntax in bt.ejs file inside view folder 
    // the folder must be named views and htmlfile extension in ejs

    // res.sendFile('templates/bootstrap.html',{root: __dirname})
    // res.send("hello world") 
    // if we want to include other ejs file inside our file
    // <%- include('bt') %>
    //     <!-- this is used to include bt in index.ejs -->

})


app.listen(port, () => {
    console.log(`app is running on ${port}`)
})