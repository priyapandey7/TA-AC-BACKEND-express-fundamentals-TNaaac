var express = require('express')
var app = express();
var logger = require('morgan')

// app.get('/',(req,res) => {
//     res.send('Welcome')
// })

// miiddleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + "/public"));
app.use(logger('dev'))
// index route
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
// new route
app.get('/new', (req, res) => {
    res.sendFile(__dirname + "/new.html");
});
// post req 
app.post('/new', (req, res) => {
    res.json(req.body);
});

// 
app.get('/users/:username',(req,res) => {
    var username = req.params.username;
    res.send(username)
})


app.listen(3000, () => {
    console.log('server is listeing on port 3000');
});