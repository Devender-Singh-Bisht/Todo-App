
import { addProjectLocalStorage } from "./localstorage";



function addProject() {

    const projectFormDiv = document.querySelector(".project-form");
    const projectForm = document.querySelector(".project-form form");

    function toggleProjectForm() {
        projectFormDiv.classList.toggle("hidden");

        const handleSubmit = (e) => {
            e.preventDefault();
            getProjectFormData();
            projectForm.reset();
            projectFormDiv.classList.add("hidden");
            projectForm.removeEventListener('submit', handleSubmit);
            document.removeEventListener('click', handleClickOutside);
        }

        const handleClickOutside = (event) => {
            if ((!projectFormDiv.contains(event.target)) && (!projectFormDiv.classList.contains("hidden"))) {
                projectForm.reset();
                projectForm.removeEventListener('submit', handleSubmit);
                document.removeEventListener('click', handleClickOutside);
                projectFormDiv.classList.add("hidden");
            };
        }

        projectForm.addEventListener('submit', handleSubmit);

        document.addEventListener('click', handleClickOutside);
    }

    function getProjectFormData() {
        let formData = new FormData(projectForm);
        let projectName = formData.get("project");

        const outputAlert = addProjectLocalStorage(projectName);
        alert(outputAlert);
    }

    
    toggleProjectForm();
}




export { addProject };