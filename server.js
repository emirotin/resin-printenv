var express = require('express'),
  compression = require('compression'),
  morgan = require('morgan'),
  app = express();

app.use(compression());
app.use(morgan('dev'));
app.use(function(req, res, next) {
  res.json(process.env);
});

app.listen(8080);
console.log('Listening on 8080');
