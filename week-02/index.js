const fs = require('fs');
const express = require("express");
const app = express();
const port = 3000;

function handleFirstRequest(req,res){
    res.send('Hello world!');
}

function postGetTotal(req,res){
    const count = req.query.count
    res.send('the total is : '+ calculateSum(parseInt(count)))
}

app.get('/', handleFirstRequest);
app.post('/getTotal',postGetTotal);
app.put('/putGetTotal',(req,res)=>{
    res.send("putGetTotal called")
})

function started(){
    console.log('Example app listning on .... port '+port);

}

// function callbackFn(err,data){
//     console.log(data);
// }
// fs.readFile("a.txt","utf-8",callbackFn)

function calculateSum(n){
    // var sum = 0;
    // for(var i=1; i<n;i++){
    //     sum = sum + i;
    // }
    return (n * (n+1)) / 2;
}

var calculatedSum = calculateSum(100);
console.log(calculatedSum)


app.listen(port, started)