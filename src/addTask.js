
import { displayTasks } from "./displayTask";
import { addTaskLocalStorage, editTaskLocalStorage, getTasksLocalStorage } from "./localstorage";



function addTask(edit = false, taskId = -1) {
    const overlay = document.querySelector(".overlay");
    const taskFormContainer = document.querySelector(".task-form");
    const taskForm = document.querySelector(".task-form>form");
    const dueDateInput = document.querySelector(".task-form #date");
    const projectName = document.querySelector('.main-heading>span').innerText;
    // changes 
    const taskFormContainerHeader = document.querySelector(".task-form>h2");
    const taskFormSubmitButton = document.querySelector(".task-form button");

    function setDueDate() {
        const today = new Date();
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const formattedDate = today.toLocaleDateString('en-CA', options);

        dueDateInput.setAttribute("min", formattedDate);
    }

    function getTaskFormData() {
        const formData = new FormData(taskForm);
        let title = formData.get("title");
        let desc = formData.get("desc");
        let dueDate = formData.get("due-date");
        let priority = formData.get("priority");

        if (edit) {
            editTaskLocalStorage(projectName, taskId, title, desc, dueDate, priority);
        }
        else {
            addTaskLocalStorage(projectName, title, desc, dueDate, priority);
        }
        displayTasks();
    }

    // Only if edit is true and want to edit the task 
    function addPreviousValuesForm() {
        const title = document.querySelector(".task-form #title");
        const desc = document.querySelector(".task-form #desc");
        const date = document.querySelector(".task-form #date");
        const priority = document.querySelector(".task-form #priority");

        let tasksArray = getTasksLocalStorage(projectName);
        title.value = tasksArray[taskId].title;
        desc.value = tasksArray[taskId].desc;
        date.value = tasksArray[taskId].dueDate;
        priority.value = tasksArray[taskId].priority;
    }

    function toggleTaskForm() {
        // changes
        if (edit) {
            taskFormContainerHeader.textContent = "Edit Task";
            taskFormSubmitButton.textContent = "Edit Task";
        }
        else {
            taskFormContainerHeader.textContent = "Create Task";
            taskFormSubmitButton.textContent = "Create Task";
        }

        taskFormContainer.classList.toggle("hidden");
        overlay.classList.toggle("hidden");
        setDueDate();

        if (edit) {
            addPreviousValuesForm()
        }

        function handleSubmit(e) {
            e.preventDefault();
            getTaskFormData();
            taskForm.reset();
            taskFormContainer.classList.add('hidden');
            overlay.classList.add("hidden");
            taskForm.removeEventListener('submit', handleSubmit);
            overlay.removeEventListener('click', handleClickOutside);
        }

        function handleClickOutside(e) {
            if ((!taskFormContainer.contains(e.target)) && (!taskFormContainer.classList.contains("hidden"))) {
                taskForm.reset();
                taskFormContainer.classList.add('hidden');
                overlay.classList.add("hidden");
                taskForm.removeEventListener('submit', handleSubmit);
                overlay.removeEventListener('click', handleClickOutside);
            }
        }

        taskForm.addEventListener('submit', handleSubmit);
        overlay.addEventListener('click', handleClickOutside);
    }

    toggleTaskForm();
}




export { addTask };