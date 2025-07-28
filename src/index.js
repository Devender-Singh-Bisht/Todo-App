
import "./style.css";
import { addProject } from "./addProject";
import { loadContent, projectHeading } from "./uiComponents";
import { addTask } from "./addTask";
import { displayTasks } from "./displayTask";




loadContent();

function app() {
    const addProjectButton = document.querySelector(`[data-btn = "add-project"]`);
    const addTaskButton = document.querySelector(`[data-btn = "add-task"]`);
    let projectButtons = document.querySelectorAll('[data-project-btn]');
    console.log(projectButtons);

    const handleClick = (e) => {

        if (addProjectButton.contains(e.target)) {
            e.stopPropagation();
            addProject();
        }

        if (addTaskButton.contains(e.target)) {
            e.stopPropagation();
            addTask();
        }

        if (e.target.classList.contains("aside-btn")) {
            e.stopPropagation();

            let target = e.target;
            if (target.hasAttribute("data-project-btn")) {
                projectHeading(target.dataset.projectBtn);
                displayTasks();
            }
        }

    }

    document.addEventListener('click', handleClick)
}

app();
