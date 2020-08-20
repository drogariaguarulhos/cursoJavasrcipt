var listElement = document.querySelector("#lista");
var inputElement = document.querySelector("#nome");
var element = document.querySelector("#btn");

var todos = JSON.parse(localStorage.getItem('listTodo')) || [];

function RenderTodo(){
    listElement.innerHTML = '';
    for(todo of todos){
        var pos = todos.indexOf(todo);

        var textElement = document.createTextNode(`${todo}     `);
        
        var linkElement = document.createElement('a')
        var linkText = document.createTextNode('Excluir');
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', `DeleteTodo(${pos})`);
        linkElement.appendChild(linkText)
        
        var todoElement = document.createElement('li');
        todoElement.appendChild(textElement);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}
    
btn.onclick = function () {
    var textTodo = inputElement.value;
    if(textTodo){
        todos.push(textTodo);
        RenderTodo();
    } else alert("Voce deve Digitar um Tarefa");
    saveToStorage();
    inputElement.value ='';
}

function DeleteTodo(pos){
    todos.splice(pos, 1);
    saveToStorage();
    RenderTodo();
}

function saveToStorage(){
    localStorage.setItem('listTodo', JSON.stringify(todos));
}

RenderTodo();
