var express = require('express'),
  compression = require('compression'),
  app = express(),
  env = process.env;

app.use(compression());
app.use(morgan('development'));
app.use(function(req, res, next) {
  res.json(env);
});

app.listent(8080);
