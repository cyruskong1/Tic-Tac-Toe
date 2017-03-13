var express = require('express');
var app = express();

var port = 3000;

app.use(express.static(__dirname + '/'));

app.listen(port, function (req, res) {
  console.log('Hi Cy, working on tic-tac-toe on port ', + port)
});


app.get('/', function(req, res) {
  console.log('__dirname',__dirname)
  res.sendFile('/index.html')
})

