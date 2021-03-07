'use strict';

const tasksForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

tasksForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const task = taskInput.value.trim();
  addTask(task);
  taskInput.value = '';
  taskRemove();
});

function addTask(task) {
  if (task == '') {
    return false;
  } else {
    tasksList.insertAdjacentHTML(
      'beforeEnd',
      `<div class='task'>
            <div class='task__title'>${task}</div>
            <a href='#' class='task__remove'>&times;</a>
        </div>`
    );
  }
}

function taskRemove() {
  const tasks = document.querySelectorAll('.task__remove');
  const task = tasks[tasks.length - 1];
  task.addEventListener('click', () => {
    task.closest('.task').remove();
  });
}
