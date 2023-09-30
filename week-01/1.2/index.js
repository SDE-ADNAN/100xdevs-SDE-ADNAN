/*
Definition of asynchronous programming in js

Asynchronous programming is a technique that enhances your prigran 
to start a potentially long-running task and still be able to be 
responsive to other events while that task runs, rather than having
to wait until that task has finished. Once that task has finished
your program is presented with the result.
*/
readFile('./a.txt',function(contents){
    console.log(contents)
});

console.log(fileContents)