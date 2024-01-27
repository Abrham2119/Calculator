const express= require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send('world ');
    
});

app.listen(3005 ,function(){
    console.log('Server is running on port 3005');
});