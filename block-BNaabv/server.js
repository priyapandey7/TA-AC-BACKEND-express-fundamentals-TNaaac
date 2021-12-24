var express = require('express');
var app = express();
// logger middleware
var logger = require('morgan');
// cookieParser middleware
var cookieParser = require('cookie-parser');

// middileware
// to capture form data from request
// to capture json data from request
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// use logger & cookieparser
app.use(logger('dev'));
app.use(cookieParser)

// add a middleware to send cookie to the client.
app.use((req,res) => {
    res.cookie("user", "priya");
    next();
});


//   1. GET -> `/` with HTML response saying 'Welcome to express' in H2.
app.get('/',(req,res) =>{
    res.send('<h2>Welcome to express</h2>')
});

// 2. GET -> `/about` with plain text content saying 'My name is qwerty'
app.get('/about',(req,res) =>{
    res.send('My name is qwerty')
});

// POST request on `/form` route
app.post('/form',(req,res) =>{
    res.json(req.body);
});
app.post('/json',(req,res) =>{
    res.json(req.body);
});
// the request on a route `/users/:username`
app.get('/users/:username',(req,res) => {
 var username = req.params.username;
    res.send(`<h2>${username}</h2>`)
})

// 404
app.use((req,res,next) => {
    res.send('page not found');
})
// custom

app.use((err,req,res,next) => {
    res.send(err)
})

app.listen(3000, () => {
    console.log('server is listening on port 3000');
})