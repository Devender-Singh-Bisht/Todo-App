
import { displayTasks } from "./displayTask";
import { displayProjectButtons, loadContent, projectHeading } from "./uiComponents";




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

function editTaskLocalStorage(projectName, taskId, title, desc, dueDate, priority) {
    let tasksArray = getTasksLocalStorage(projectName);
    tasksArray[taskId].title = title;
    tasksArray[taskId].desc = desc;
    tasksArray[taskId].dueDate = dueDate;
    tasksArray[taskId].priority = priority;
    
    localStorage.setItem(projectName, JSON.stringify(tasksArray));
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

function editTaskCompleteStatus(taskId) {
    const projectName = document.querySelector('.main-heading>span').innerText;
    const tasksArray = getTasksLocalStorage(projectName);
    let completed = tasksArray[taskId].completed;
    console.log(tasksArray)

    if (completed) {
        let confirmation = confirm("Are you sure you want to mark this task as incomplete?")
        if (confirmation) {
            tasksArray[taskId].completed = false;
        }
    }
    else {
        let confirmation = confirm("Are you sure you want to mark this task as complete?")
        if (confirmation) {
            tasksArray[taskId].completed = true;
        }
    }
    
    localStorage.setItem(projectName, JSON.stringify(tasksArray));
    displayTasks();
}


function deleteTaskLocalStorage(taskId) {
    const projectName = document.querySelector('.main-heading>span').innerText;
    const tasksArray = getTasksLocalStorage(projectName);

    let confirmation = confirm("Are you sure you want to delete this task?");
    if (confirmation) {
        tasksArray.splice(taskId, 1);
        localStorage.setItem(projectName, JSON.stringify(tasksArray));
        displayTasks();
    }
}



export { addProjectLocalStorage, addTaskLocalStorage, getTasksLocalStorage, deleteProject, editTaskCompleteStatus, deleteTaskLocalStorage, editTaskLocalStorage};