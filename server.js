const express= require('express');
const bodyParser = require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:true}));


//Calculator
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
    
    //console.log(__direname);
    
});

app.post('/',function(req,res){

    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;

    res.send('The sum of the numbers is '+result)
})





//BMI-calculator

app.get('/bmiCalculator', function(req, res) {
    res.sendFile(__dirname+'/bmiCalculator.html');
})

app.post('/bmiCalculator', function(req, res) {
    var height =parseFloat(req.body.height)
    var weight =parseFloat(req.body.weight)
    var bmi=weight/(height*height)

    res.send('Your BMI is '+bmi)

})

app.listen(3005 ,function(){
    console.log('Server is running on port 3005');
});



//expressjs.com