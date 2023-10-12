function createDomElements(todos){
    var parentElement = document.getElementById('mainArea');
    // parentElement.innerHTML = JSON.stringify(todos)
    parentElement.innerHTML ='';
    for(let i = 0; i<=todos.length;i++){
        var childElement = document.createElement('div');

        var grandChildElement1 = document.createElement('span');
        grandChildElement1.innerHTML = todos[i]?.title || 'title';

        var grandChildElement2 = document.createElement('span');
        grandChildElement2.innerHTML = todos[i].description;

        var grandChildElement3 = document.createElement('button');
        grandChildElement3.innerHTML = 'DELETE';
        grandChildElement3.setAttribute('onclick','deleteTodo('+todos[i].id+')')

        childElement.appendChild(grandChildElement1)
        childElement.appendChild(grandChildElement2)
        childElement.appendChild(grandChildElement3)

        parentElement.appendChild(childElement)
    }
}

window.setInterval(()=>{
    let todos = [];
    for(let i = 0; i<Math.floor(Math.random()*100);i++){
        todos.push({
            title:'Go to gym',
            description:'Hit the gym at 8:00',
            id:i+1
        })
    }
    createDomElements(todos)
},1000);