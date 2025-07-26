
import "./style.css";
import { addProject } from "./addProject";
import { loadContent } from "./uiComponents";





loadContent();

const addProjectButton = document.querySelector(".projects-header button");

document.addEventListener('click', (e) => {

    if (addProjectButton.contains(e.target)) {
        e.stopPropagation();
        addProject();
    }
})
