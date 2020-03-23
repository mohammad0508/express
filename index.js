var express = require('express');
var app = express();

app.get('/',function(reg,res){
    res.send('Mohammad Said');
})

var server = app.listen(8000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('App running on http://localhost:8000');
   // console.log('App running on http://%s:%s',host,port);
    
})