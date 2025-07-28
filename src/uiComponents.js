
import { displayTasks } from "./displayTask";




function displayProjectButtons(projectName) {
    const asideProjects = document.querySelector("div.projects");

    const button = document.createElement('button');
    button.setAttribute('class', 'project aside-btn');
    button.setAttribute('type', 'button');
    button.setAttribute('data-project-btn', projectName);
    button.textContent = projectName;

    asideProjects.appendChild(button);
}


function projectHeading(projectName) {
    const heading = document.querySelector('.main-heading>span');
    heading.textContent = projectName;
}


function loadContent() {
    if (localStorage.length < 1) {
        localStorage.setItem('HOME', '[]');
    }

    for (let i = 0; i < localStorage.length; i++) {
        displayProjectButtons(localStorage.key(i));
    }

    projectHeading("HOME");

    // const homeArray = JSON.parse(localStorage.getItem("HOME"));
    displayTasks();
}


export { displayProjectButtons, loadContent, projectHeading };