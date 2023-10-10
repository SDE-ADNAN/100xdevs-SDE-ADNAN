function createDomElements(todos){
    var parentElement = document.getElementById('mainArea');
    // parentElement.innerHTML = JSON.stringify(todos)
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

createDomElements([
    {
        title: 'This is the title...', description: 'This is the description...'
    }
])