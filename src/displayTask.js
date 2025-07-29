
import penguinImage from './assets/penguin.png';
import { getTasksLocalStorage } from "./localstorage";



const taskHtml = (title, desc)=> {
    return `<div class="checkbox ">
                        <div class="checkmark"></div>
                    </div>
                    <div class="task-content">
                        <div class="task-title">${title}</div>
                        <div class="task-desc">${desc}</div>
                    </div>
                    <div class="task-btns">
                        <button type="button" class="edit-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M12 20h9" />
                                <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                            </svg>
                        </button>
                        <button type="button" class="red-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    d="M6 7h12M10 11v6M14 11v6M5 7l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>`;
}



function displayTasks() {
    const tasks = document.querySelector(".tasks");
    const mainHeading = document.querySelector('.main-heading>span');

    const projectName = mainHeading.innerText;
    const tasksArray = getTasksLocalStorage(projectName);

    tasks.innerHTML = "";

    if (tasksArray.length < 1) {
        let noTasksDiv = document.createElement("div");
        noTasksDiv.classList.add("no-task");

        let penguinImg = document.createElement("img");
        penguinImg.src = penguinImage;
        penguinImg.alt = "Penguin";

        let messageDiv = document.createElement("div");
        messageDiv.textContent = "Sorry! You haven't created any task inside this folder yet.";

        noTasksDiv.append(penguinImg, messageDiv);
        tasks.appendChild(noTasksDiv);
        return;
    }

    tasksArray.forEach(task => {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        console.log(task.priority)

        if (task.priority === "low") {
            taskDiv.style.backgroundColor = "#DBB8FF";
        }
        else if (task.priority === "medium") {
            taskDiv.style.backgroundColor = "#C48AFF";
        }
        else {
            taskDiv.style.backgroundColor = "#AD5CFF";
        }

        taskDiv.innerHTML = taskHtml(task.title, task.desc);
        tasks.appendChild(taskDiv);
    });

}

export { displayTasks };
