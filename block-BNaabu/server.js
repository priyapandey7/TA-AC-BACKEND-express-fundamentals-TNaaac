var express = require('express');
var app = express();
var cookieParser = require('cookie-parser')
var logger = require('morgan');

app.use(cookieParser())
app.use(logger('dev'))

app.get('/admin',(req,res,next) =>{
    next("unauthorised user")
})

// - GET request on '/'
app.get('/',(req,res) => {
    res.send('Welcome')
})
// - GET request on '/about'
app.get('/about',(req,res) => {
    res.send('About page')
})
// throw 404
app.use((req,res,next) => {
    res.send('Page not found')
});

//custom middleware which throws err
app.use((err,req,res,next) =>{
 res.status(500).send(err);
})

app.listen(3000, () => {
    console.log('server is listeing on port 3000');
});


