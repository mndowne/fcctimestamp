var express = require('express');
var app = express();

/*app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});*/

app.use(express.static(__dirname));

app.get('/:date', function(req,res){
  console.log(req.params.month);  
  res.send(req.params.month);
});

app.listen(8080, function () {console.log('server is on 8080');});
