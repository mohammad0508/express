
var express = require('express');
var app = express();
var bodyPa = require('body-parser');
var urlEncoded = bodyPa.urlencoded({extended:false});

app.use(express.static('public'));
app.get('/index.html',function(req,res){
    res.sendfile(__dirname+"/"+'index.html');
})

app.post('/express_post',urlEncoded,function(req,res){
   
    //res.send('<p>fname : '+ req.query['fname'] + ' </p> <p>lname : ' + req.query['lname'] + ' </p> <p>Email : ' + req.query['email'] + ' </p>');
    response ={
     fname :req.body.fname,
     lname :req.body.lname,
     email :req.body.email,
     gender :req.body.gender,
     comments :req.body.comments
    };
console.log(response);
res.end(JSON.stringify(response));

});

var server = app.listen(8000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('App running on http://localhost:8000');
   // console.log('App running on http://%s:%s',host,port);
    
})