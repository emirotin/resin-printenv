var express = require('express'),
  compression = require('compression'),
  morgan = require('morgan'),
  app = express(),
  env = process.env;

app.use(compression());
app.use(morgan('development'));
app.use(function(req, res, next) {
  console.log('Request received');
  res.json(env);
});

app.listent(8080);
console.log('Listening on 8080');
