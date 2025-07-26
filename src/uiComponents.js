

function projectButton(projectName) {
    const asideProjects = document.querySelector("div.projects");

    const button = document.createElement('button');
    button.setAttribute('class', 'project aside-btn');
    button.setAttribute('type', 'button');
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
        projectButton(localStorage.key(i));
    }

    projectHeading("Home");
}


export { projectButton, loadContent, projectHeading };