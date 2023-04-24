const taskList = document.getElementById('tasks__list'),
      addButton = document.getElementById('tasks__add'),
      input = document.getElementById('task__input');

function addTask(text) {
    taskList.innerHTML += 
        `<div class="task">
            <div class="task__title">${text}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>`;

        const newTask = taskList.lastChild,
          delButton = newTask.querySelector('.task__remove');

    delButton.onclick = () => {
        delTask(newTask);
        return false;
    }
    
}

function delTask(task) {
    task.remove();
}

addButton.onclick = () => {
    if (input.value) {
        addTask(input.value);
        input.value = '';
    }
    return false;
}