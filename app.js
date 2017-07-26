const express = require('express');
const mustacheExpress = require('mustache-express');

var app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/', function(request, response) {
  response.render('index');
});

app.listen(3000, function(){
  console.log('Server started');
});
