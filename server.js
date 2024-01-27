const express= require('express');

const app=express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
    //console.log(__direname);
    

});

app.listen(3005 ,function(){
    console.log('Server is running on port 3005');
});

//expressjs.com