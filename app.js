var koa = require('koa');
var app = module.exports = koa();

app.use(function *() {
    this.body = 'Hello World';
});

var port = process.env.PORT || 8000;

if (!module.parent) app.listen(port);