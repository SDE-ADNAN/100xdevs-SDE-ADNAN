const fs = require('fs');
const express = require("express");
const app = express();
const port = 3000;

function handleFirstRequest(req,res){
    res.send('Hello world!');
}

function postGetTotal(req,res){
    res.send('post getTotal called')
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

function calculateSum(counter){
    var sum = 0;
    for(var i=0; i<counter;i++){
        sum = sum + i;
    }
    return sum;
}

var calculatedSum = calculateSum(100);
console.log(calculatedSum)


app.listen(port, started)