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

if(process.env.OPENSHIFT_NODEJS_PORT && process.env.OPENSHIFT_NODEJS_IP) {
    app.listen(process.env.OPENSHIFT_NODEJS_PORT, process.env.OPENSHIFT_NODEJS_IP);
}
else {
    //require('derby').run(__dirname + '/lib/server' );
    app.listen(3000);
}
