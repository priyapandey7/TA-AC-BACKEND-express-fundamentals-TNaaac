var express = require('express');
var app = express();
var logger  = require('morgan')
var cookieParser = require('cookie-parser')

// morgan
app.use(logger('dev'))
app.use(cookieParser());
app.use(express.json());

app.use(express.urlencoded({extended :false}));
app.use(express.static(__dirname + '/public'))
// custumlogger
app.use((req, res, next) => {
    res.cookie("username","PriyaPandey");
    var count = req.cookies.count;
    if(count){
     res.cookie("count",Number(count) +1)
    }else{
        res.cookie("count", 1)
    }
    console.log(count)
    next();
   })

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html')
});

app.listen(3000,()=> {
    console.log('server is listening on port 3000');
})