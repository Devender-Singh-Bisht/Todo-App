
import "./style.css";
import { addProject } from "./addProject";
import { loadContent, projectHeading } from "./uiComponents";
import { addTask } from "./addTask";
import { displayTasks } from "./displayTask";
import { deleteProject } from "./localstorage";




loadContent();

function app() {
    const addProjectButton = document.querySelector(`[data-btn = "add-project"]`);
    const addTaskButton = document.querySelector(`[data-btn = "add-task"]`);
    const deleteProjectButton = document.querySelector(`[data-btn = "delete-project"]`)

    const handleClick = (e) => {

        if (addProjectButton.contains(e.target)) {
            e.stopPropagation();
            addProject();
        }

        if (addTaskButton.contains(e.target)) {
            e.stopPropagation();
            addTask();
        }

        if (e.target.hasAttribute("data-project-btn")) {
            e.stopPropagation();
            projectHeading(e.target.dataset.projectBtn);
            displayTasks();
        }

        if (deleteProjectButton.contains(e.target)) {
            e.stopPropagation();
            deleteProject();
        }

    }

    document.addEventListener('click', handleClick)
}

app();
