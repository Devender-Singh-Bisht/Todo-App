
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
    const projectButtons = document.querySelectorAll('[data-project-btn]');
    const heading = document.querySelector('.main-heading>span');
    heading.textContent = projectName;

    function buttonClickedStyling() {
        projectButtons.forEach(button => {
            if (button.classList.contains('aside-btn-clicked')) {
                button.classList.remove('aside-btn-clicked');
            }
        });

        document.querySelector(`[data-project-btn = ${projectName}]`).classList.add("aside-btn-clicked");
    }

    buttonClickedStyling();
}


function loadContent() {
    if (localStorage.length < 1) {
        localStorage.setItem('HOME', '[]');
    }

    const asideProjects = document.querySelector("div.projects");
    asideProjects.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === "HOME") {
            displayProjectButtons(localStorage.key(i), true)
        }
        else {
            displayProjectButtons(localStorage.key(i));
        }
    }

    projectHeading("HOME");

    displayTasks();
}


export { displayProjectButtons, loadContent, projectHeading };