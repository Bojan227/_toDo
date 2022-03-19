 import capitalizeFirstLetter from './capitalize';
import remove from './icons/close-circle.png';

 const createProject = (title, id) => ({
     title,
     id,
 })
 function createNewProject(title, id){
    const userInput = title.toLowerCase()
    const listElement = document.createElement('li');
    const projectName = document.createElement('h3')
    const removeProject = document.createElement('img')
    removeProject.classList.add('removeProject')
    removeProject.src = remove;
    projectName.textContent =  capitalizeFirstLetter(title)
    projectName.setAttribute('data-category', userInput)
    listElement.setAttribute('data-id', id)
    listElement.append(projectName, removeProject)
    return listElement
}
function createDropDownOption(title){
    const option = document.createElement('option')
    option.id = 'category'
    option.textContent = capitalizeFirstLetter(title)
    option.value = title
    return option
}


function updateDisplayedProjects(array, content, dropdown){
    if(array.length === 0){
        content.innerHtml = ''
        dropdown.innerHtml = ''
    }else{
        
        array.map(project => {
            content.appendChild(createNewProject(project.title, project.id))
            dropdown.appendChild(createDropDownOption(project.title))
        })
    }
    
    
}

export {createProject, updateDisplayedProjects}