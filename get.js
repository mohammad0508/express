var express = require('express');
var app = express();
app.use(express.static('public'))

app.get('/index.html',function(req,res){ // call pack fun
    res.sendfile(__dirname+"/"+'index.html');
})
app.get('/express_get',function(req,res){
   response = {
       fname : req.query.fname,
       lname : req.query.lname
   };
   console.log(response);
   res.end(JSON.stringify(response));
   
})

var server = app.listen(8000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('App running on http://localhost:8000');
   // console.log('App running on http://%s:%s',host,port);
    
})