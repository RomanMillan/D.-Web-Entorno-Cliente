const newTask = document.querySelector('#new-task');
const addTask = document.querySelector('#addTask');
const todoList = document.querySelector('.todo-list > ul');
const completeList = document.querySelector('.complete-list > ul');

/* añadir nueva tarea a realizar */
addTask.addEventListener('click',()=>{
    let li = document.createElement('li');
    let label = document.createElement('label');
    let textLi = document.createTextNode(newTask.value);
    label.appendChild(textLi);
    let checkbox = document.createElement('input');
    checkbox.setAttribute("type","checkbox");
    li.appendChild(checkbox);
    li.appendChild(label);
    todoList.appendChild(li);
});


/* añadir a tareas completadas */
todoList.addEventListener('click',(e)=>{
    let selectTask = e.target;
    let selectTaskText = selectTask.parentElement.children[1].textContent;
    
    /* borramos el punto de tareas incompletas */
        let deleteT = selectTask.parentElement;
        todoList.removeChild(deleteT);

    /* creamos y añadimos la nueva lista de tareas hechas */
    let li = document.createElement('li');
    let label = document.createElement('label');
    let textLabel = document.createTextNode(selectTaskText);
    label.appendChild(textLabel);
    let button = document.createElement('button');
    let textButton = document.createTextNode('Delete');
    button.appendChild(textButton);
    li.appendChild(label);
    li.appendChild(button);
    completeList.appendChild(li);

});

/* borrar tareas completadas */
completeList.addEventListener('click',(e)=>{
    let selectTask = e.target;
    let deleteT = selectTask.parentElement;
    completeList.removeChild(deleteT);
});