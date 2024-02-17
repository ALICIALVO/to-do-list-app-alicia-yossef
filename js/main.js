const todoList = document.querySelector('.todo-list');
const taskInput = document.querySelector('#task-input');
const addButton = document.querySelector('.add-task');

function addTask() {
    // gets value from user input:
    const inputValue = taskInput.value;

    // creates li:
    const todoTask = document.createElement('li');
    todoTask.classList.add('todo-task');

    // creates checkbox:
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('task-checkbox');

    // creates label:
    const label = document.createElement('label');
    label.textContent = inputValue;
    label.classList.add('task-label');

    // creates removeTask button:
    const removeTask = document.createElement('button');
    removeTask.innerHTML = '<i class="fa-regular fa-trash-can" style="color: #71385c;"></i>';
    removeTask.classList.add('task-remove');

    todoTask.appendChild(checkBox);
    todoTask.appendChild(label);
    todoTask.appendChild(removeTask);

    todoList.appendChild(todoTask);

    taskInput.value = '';
    // saveData();
}

addButton.addEventListener('click', addTask);

function taskCompletion(event) {

    if (event.target.matches('.task-checkbox')) {
        let closetsLi = event.target.closest('li');
        if (event.target.checked) {
            closetsLi.classList.add("completed");


        } else {
            closetsLi.classList.remove("completed");
        }
    }
}

todoList.addEventListener("click", taskCompletion);










// function taskCompletion(event){

// }






// function deleteTask(event){

// }
// function saveData(){
//     localStorage.setItem("data", todoList.innerHTML);
// }
// function showTask(){
//     todoList.innerHTML = localStorage.getItem("data");
// }
// showTask();