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

function givePage(req,res){
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello</title>
    </head>
    <body>
        <p>Hi there from html file..</p>
    </body>
    </html>`)
}

function calculateMul(n){
    let sum =1;
    for(var i =1;i<=n;i++){
        sum = sum * i;
    }
    return sum;
}

function postGetTotal(req,res){
    console.log(req.body);
    const count = req.body.count;
    res.send('the total is : '+ calculateSum(parseInt(count)));
}

// app.get('/', handleFirstRequest);
// app.post('/',postGetTotal);
app.get('/givep',givePage)
app.post('/',(req,res)=>{
    console.log(req.body.count)
    const n = req.body.count
    console.log(calculateMul(n))
    if(n>1000){
        res.status(411).send("you have sent a very big number to calculate! give below 1000")
    }else{
        let sum = calculateMul(n)
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