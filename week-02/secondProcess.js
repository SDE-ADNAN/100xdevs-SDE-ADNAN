function logResBody(jsonBody){
    console.log(jsonBody)
}

function callbackFn(result){
    result.json().then(logResBody)
}

var sendObj={
    method:"GET"
}

fetch("http://localhost:3000/handleSum?count=100",sendObj).then(callbackFn)