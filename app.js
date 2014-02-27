var koa = require('koa');
var serve = require('koa-static');
var app = module.exports = koa();
var favicon = require('koa-favicon');

app.use(favicon());
app.use(serve(__dirname + "/public"));


app.use(function *(){
    this.body = 'Choose app';
});

var port = process.env.PORT || 8000;

if (!module.parent) app.listen(port);