
import { projectButton, projectHeading} from "./uiComponents";




function addProjectLocalStorage(projectName) {

    if (localStorage.getItem(projectName) !== null) {
        return "Project with this name Already Exists.";
    }

    localStorage.setItem(projectName, "[]");
    projectButton(projectName);
    projectHeading(projectName);
    return `Project Created: ${projectName}.`
}



export {addProjectLocalStorage};