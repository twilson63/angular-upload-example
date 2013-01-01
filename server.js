var flatiron = require('flatiron');
var app = flatiron.app;
var ecstatic = require('ecstatic');
var formidable = require('formidable');
var util = require('util');

app.use(flatiron.plugins.http, {
  buffer: false,
  before: [
    ecstatic({ root: __dirname })
  ]
});

app.router.post('/upload', { stream: true}, function(){
  var self = this;
  var form = new formidable.IncomingForm();
  form.uploadDir = __dirname;
  form.parse(this.req, function(err, fields, files){
    var img = files.logo.path.split('/').pop();
    self.res.writeHead(200, { 'Content-Type': 'text/html' });
    self.res.end(img);
    console.log(util.inspect({fields: fields, files: files}));
  })
});

app.start(3000);