var express = require('express'),
  compression = require('compression'),
  morgan = require('morgan'),
  app = express(),
  port = process.env.PORT || 8080;

app.use(compression());
app.use(morgan('dev'));
app.use(function(req, res, next) {
  res.json(process.env);
});

app.listen(port);
console.log('Listening on ' + port);
