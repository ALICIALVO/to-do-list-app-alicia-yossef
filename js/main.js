const genID = () => Math.random().toString(36).slice(2, 8);
const todoList = document.querySelector('.todo-list');
const taskInput = document.querySelector('#task-input');
const addButton = document.querySelector('.add-task');
const todoForm = document.querySelector('.todo-form');
const clearCompletedBtn = document.querySelector('.clear-completed');
const filterButtons = document.querySelector('.filter-btns')
const tasksLeft = document.querySelector('.tasks-left')

let todoData = [];

function onFormSubmit(event) {
    event.preventDefault();
    addTask();
}

todoForm.addEventListener('submit', onFormSubmit);

let counterTask = 0;
function addTask() {
    if (taskInput.value === '') {
        alert('Hey there, you forgot to write something!(:');

    } else {

        counterTask++
        tasksLeft.textContent = counterTask + " tasks left"
        // gets value from user input:
        const inputValue = taskInput.value;

        // creates li:
        const todoTask = document.createElement('li');
        todoTask.classList.add('todo-task');
        todoTask.classList.add("active");

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
        // added push to array with task = inputValue , status to active , 
        // and id calls a function that generates a rundom unique number.
        todoData.push({
            task: taskInput.value,
            status: "active",
            id: genID()
        });
        taskInput.value = '';
        // saveData();

        removeTask.addEventListener('click', deleteTask);
    }
}


addButton.addEventListener('click', addTask);

function taskCompletion(event) {

    if (event.target.matches('.task-checkbox')) {
        let closetsLi = event.target.closest('li');
        if (event.target.checked) {

            closetsLi.classList.add("completed");
            closetsLi.classList.remove("active");
            counterTask--
            tasksLeft.textContent = counterTask + " tasks left"

        } else {
            closetsLi.classList.remove("completed");
            closetsLi.classList.add("active");
            counterTask++
            tasksLeft.textContent = counterTask + " tasks left"
            // for(let todo of todoData){
            //     if(closetsLi.matches('.active')){
            //         todo.status = "active";                    
            //     }               
            // }
            // console.log(todoData)
        }
    }
}

todoList.addEventListener("click", taskCompletion);



// deletes tasks with trash icon:
function deleteTask(event) {
    const closetsLi = event.target.closest('li');
    closetsLi.remove();
    counterTask--
    tasksLeft.textContent = counterTask + " tasks left";
}
// todoList.addEventListener('click', deleteTask);deletes all-not working.


function clearCompletedTasks() {
    // get all the completed tasks:
    const completedTasks = document.querySelectorAll('.todo-task.completed');

    // remove each completed task:
    for (let i = 0; i < completedTasks.length; i++) {
        completedTasks[i].remove();
    }
}
clearCompletedBtn.addEventListener('click', clearCompletedTasks);

function filterTasks(event) {
    const activeTasks = document.querySelectorAll('.active')
    const completedTasks = document.querySelectorAll('.completed');


    if (event.target.matches('.filter-all')) {
        for (let i = 0; i < completedTasks.length; i++) {
            completedTasks[i].style.display = "flex";
        }
        for (let i = 0; i < activeTasks.length; i++) {
            activeTasks[i].style.display = "flex";
            // tasksLeft.textContent = i + 1 + " tasks left"
        }
    }

    if (event.target.matches('.filter-active')) {
        for (let i = 0; i < completedTasks.length; i++) {
            completedTasks[i].style.display = "none";
        }
        for (let i = 0; i < activeTasks.length; i++) {
            activeTasks[i].style.display = "flex";
            tasksLeft.textContent = i + 1 + " tasks left"
        }
    }

    if (event.target.matches('.filter-completed')) {
        for (let i = 0; i < activeTasks.length; i++) {
            activeTasks[i].style.display = "none";
        }
        for (let i = 0; i < completedTasks.length; i++) {
            completedTasks[i].style.display = "flex";
       
            // counterTask
            // tasksLeft.textContent = counterTask + " task completed"
            tasksLeft.textContent = i + 1 + " task completed";
        }
    }



    // if(event.target.matches('.filter-all')){   
    //     for (let i = 0; i < allTasks.length; i++) {
    //         allTasks[i].style.display = "block";
    //     }
    // }


}
filterButtons.addEventListener('click', filterTasks)
// function saveData(){
//     localStorage.setItem("data", todoList.innerHTML);
// }
// function showTask(){
//     todoList.innerHTML = localStorage.getItem("data");
// }
// showTask();