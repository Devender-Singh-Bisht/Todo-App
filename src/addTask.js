
import { displayTasks } from "./displayTask";
import { addTaskLocalStorage } from "./localstorage";



function addTask() {

    const overlay = document.querySelector(".overlay");
    const taskFormContainer = document.querySelector(".task-form");
    const taskForm = document.querySelector(".task-form>form");
    const dueDateInput = document.querySelector(".task-form #date");
    const projectName = document.querySelector('.main-heading>span').innerText;


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

        addTaskLocalStorage(projectName, title, desc, dueDate, priority);
        displayTasks();
    }

    function toggleTaskForm() {
        taskFormContainer.classList.toggle("hidden");
        overlay.classList.toggle("hidden");
        setDueDate();

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