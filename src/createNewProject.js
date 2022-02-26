 function createNewProject(a){
    let userInput = a.value.toLowerCase()
    const listElement = document.createElement('li');
    const projectName = document.createElement('h3')
    projectName.textContent =  a.value
    projectName.setAttribute('data-category', userInput)
    listElement.appendChild(projectName)
    return listElement
}

function appendNewProject(elementToAppend){
    const projectList = document.querySelector('.project-list')
    projectList.insertAdjacentElement('beforeend', elementToAppend)
}

export {createNewProject, appendNewProject}