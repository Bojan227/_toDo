 const createProject = (title, id) => ({
     title,
     id,
 })
 function createNewProject(title, id){
    let userInput = title.value.toLowerCase()
    const listElement = document.createElement('li');
    const projectName = document.createElement('h3')
    projectName.textContent =  title.value
    projectName.setAttribute('data-category', userInput)
    listElement.setAttribute('data-id', id)
    listElement.appendChild(projectName)
    return listElement
}

function appendNewProject(elementToAppend){
    const projectList = document.querySelector('.project-list')
    projectList.insertAdjacentElement('beforeend', elementToAppend)
}

export {createNewProject, appendNewProject}