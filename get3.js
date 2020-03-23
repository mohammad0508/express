
var express = require('express');
var app = express();
app.use(express.static('public'))

app.get('/index.html',function(req,res){
    res.sendfile(__dirname+"/"+'index.html');
})

app.get('/express_get',function(req,res){
    res.send('<p>fname : '+ req.query['fname'] + ' </p> <p>lname : ' + req.query['lname'] + ' </p> <p>Email : ' + req.query['email'] + ' </p>');
       
})

var server = app.listen(8000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('App running on http://localhost:8000');
   // console.log('App running on http://%s:%s',host,port);
    
})