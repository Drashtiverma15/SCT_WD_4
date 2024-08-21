document.addEventListener('DOMContentLoaded', () => {
    const taskNameInput = document.getElementById('taskName');
    const taskDateInput = document.getElementById('taskDate');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', () => {
        const taskName = taskNameInput.value.trim();
        const taskDate = taskDateInput.value;

        if (taskName === '') {
            alert('Please enter a task name.');
            return;
        }

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskName} ${taskDate ? `(Due: ${new Date(taskDate).toLocaleString()})` : ''}</span>
            <button class="complete-btn">Complete</button>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(listItem);

        taskNameInput.value = '';
        taskDateInput.value = '';

        listItem.querySelector('.complete-btn').addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        listItem.querySelector('.edit-btn').addEventListener('click', () => {
            const newTaskName = prompt('Edit task name:', taskName);
            if (newTaskName) {
                listItem.querySelector('span').textContent = `${newTaskName} ${taskDate ? `(Due: ${new Date(taskDate).toLocaleString()})` : ''}`;
            }
        });

        listItem.querySelector('.delete-btn').addEventListener('click', () => {
            if (confirm('Are you sure you want to delete this task?')) {
                taskList.removeChild(listItem);
            }
        });
    });
});


