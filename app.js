var koa = require('koa');
var serve = require('koa-static');
var app = module.exports = koa();
var path = require('path');
var extname = path.extname;
var fs = require('fs');
var favicon = require('koa-favicon');

app.use(favicon());
app.use(serve(__dirname + "/public"));


app.use(function *(){
    var path = __dirname + this.path;
    this.type = extname(path);
    this.body = fs.createReadStream(path);
});

var port = process.env.PORT || 8000;

if (!module.parent) app.listen(port);