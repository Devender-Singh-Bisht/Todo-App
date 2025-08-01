
import "./style.css";
import { addProject } from "./addProject";
import { loadContent, projectHeading } from "./uiComponents";
import { addTask } from "./addTask";
import { displayTaskOverlay, displayTasks } from "./displayTask";
import { deleteProject, editTaskCompleteStatus, deleteTaskLocalStorage } from "./localstorage";




loadContent();

function app() {
    const addProjectButton = document.querySelector(`[data-btn = "add-project"]`);
    const addTaskButton = document.querySelector(`[data-btn = "add-task"]`);
    const deleteProjectButton = document.querySelector(`[data-btn = "delete-project"]`);
    const tasksContainer = document.querySelector(`.tasks`);

    const handleClick = (e) => {

        if (addProjectButton.contains(e.target)) {
            addProject();
        }

        if (addTaskButton.contains(e.target)) {
            addTask();
        }

        if (e.target.hasAttribute("data-project-btn")) {
            projectHeading(e.target.dataset.projectBtn);
            displayTasks();
        }

        if (deleteProjectButton.contains(e.target)) {
            deleteProject();
        }

        if (tasksContainer.contains(e.target)) {

            let target = e.target;

            if (target.closest('.task') !== null) {
                const task = target.closest('.task');
                let taskId = task.dataset.taskId;
                const checkbox = task.querySelector('.checkbox');
                const deleteBtn = task.querySelector('.task-btns .red-btn');
                const editBtn = task.querySelector('.task-btns .edit-btn');

                if (checkbox.contains(target)) {
                    editTaskCompleteStatus(taskId);
                }
                else if (deleteBtn.contains(target)) {
                    deleteTaskLocalStorage(taskId);
                }
                else if (editBtn.contains(target)) {
                    addTask(true, taskId);
                }
                else {
                    displayTaskOverlay(taskId);
                }
            }
        }

    }

    document.addEventListener('click', handleClick)
}

app();
