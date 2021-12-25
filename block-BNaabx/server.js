var express = require('express');
var app = express();
var morgan = require('morgan');
var cookieParser = require('cookie-parser')
// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + "/public"))

// app.use(morgan('dev'))
app.use(cookieParser)
// 
morgan.token('postData', (request) => {
    if (request.method == 'POST') return ' ' + JSON.stringify(request.body);
    else return ' ';
  });
  
  app.use(
    morgan(
      ':method :url :status :res[content-length] - :response-time ms :postData'
    )
  );
  
// routes
app.get('/',(req,res) => {
    res.send('hello')
});

app.get('/users',(req,res) => {
    res.send('users page')
});

// 1. morgan

app.use((req, res, next) => {
    let now = new Date();
    console.log(req.method, req.path, now);
    next();
  });
  
  // 2. express.json
  
  app.post('/', (req, res)=>{
      let data = req.body;
      console.log(req.body);
      res.send(JSON.parse(data));
  });

  

app.listen(3000,() =>{
    console.log('server is listening on port 3000');
})