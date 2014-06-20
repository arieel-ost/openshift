var ghost = require('ghost');
console.log(ghost);
var express = require('express');
var app = express();
var expressApp = module.exports = express();
app.use(express.static(__dirname + '/public'));
var options = {
"config" : false,
"app" : app
};

ghost(options);
app.listen(process.env.PORT || 3000);
