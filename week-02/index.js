const fs = require('fs');
const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParser.json())

function middleware1(req,res,next){
    console.log("from inside the middleware1:  ")
    console.log("req.body :   "+req.body)
    next();
}
app.use(middleware1)

function handleFirstRequest(req,res){
    res.send('Hello world!');
}

function postGetTotal(req,res){
    console.log(req.body);
    const count = req.body.count;
    res.send('the total is : '+ calculateSum(parseInt(count)));
}

// app.get('/', handleFirstRequest);
// app.post('/',postGetTotal);
app.post('/',(req,res)=>{
    const n = req.body.count
    if(n>1000){
        res.status(411).send("you have sent a very big number to calculate! give below 1000")
    }else{
        let sum = `${(n * (n+1)) / 2}`
        const resObj={
            sum:sum
        }
        res.status(200).send(resObj)
    }
});
// app.put('/putGetTotal',(req,res)=>{
//     res.send("putGetTotal called")
// })

function started(){
    console.log('Example app listning on .... port '+port);

}

function calculateSum(n){
    return (n * (n+1)) / 2;
}

var calculatedSum = calculateSum(100);
console.log(calculatedSum)


app.listen(port, started)