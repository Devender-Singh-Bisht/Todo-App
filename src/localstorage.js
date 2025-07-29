
import { displayTasks } from "./displayTask";
import { displayProjectButtons, loadContent, projectHeading} from "./uiComponents";




function addProjectLocalStorage(projectName) {

    if (localStorage.getItem(projectName) !== null) {
        return "Project with this name Already Exists.";
    }

    localStorage.setItem(projectName, "[]");
    displayProjectButtons(projectName);
    projectHeading(projectName);
    displayTasks();
    return `Project Created: ${projectName}.`
}

function addTaskLocalStorage(projectName, title, desc, dueDate, priority) {
    let task = {};
    task["title"] = title;
    task["desc"] = desc;
    task["dueDate"] = dueDate;
    task["priority"] = priority;
    task["completed"] = false;

    let projectArray = localStorage.getItem(projectName);
    projectArray = JSON.parse(projectArray);
    projectArray.push(task);
    projectArray = JSON.stringify(projectArray);

    localStorage.setItem(projectName, projectArray);
}

function getTasksLocalStorage(projectName) {
    let tasks = localStorage.getItem(projectName);
    tasks = JSON.parse(tasks);
    return tasks;
}

function deleteProject() {
    const projectName = document.querySelector('.main-heading>span').innerText;

    if (projectName === "HOME") {
        alert("This is the Default project and cannot be deleted.")
        return;
    }

    let confirmation = confirm(`Are you sure you want to delete '${projectName}' as it will delete all your tasks inside it?`)
    if (confirmation) {
        localStorage.removeItem(projectName);
        loadContent();
        return;
    }
    return; 
}



export {addProjectLocalStorage, addTaskLocalStorage, getTasksLocalStorage, deleteProject};