var express = require('express');
var compression = require('compression');
var port = process.env.PORT || 3000;
var app = express();

app.use(compression());
app.use(express.static(__dirname));
app.listen(port);