var express = require('express');
var app = express();
var logger = require('morgan');
var cookieParser = require('cookie-parser')
// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(express.static(__dirname + "/public"))
app.use(logger('dev'))
app.use(cookieParser)

// routes
app.get('/',(req,res) => {
    res.sendFile(__dirname + "/index.html")
});

app.get('/project',(req,res) => {
    res.sendFile(__dirname + "/project.html")
});

// 404
app.use((req,res,next) =>{
    res.send('page not found')
});
// custom
app.use((err,req,res,next) =>{
    res.send(err);
});


app.listen(4000,() =>{
    console.log('server is listening on port 4000');
})