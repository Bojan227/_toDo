function createTask(title, dueDate, description, priority, id){
    const left = document.createElement('div')
    left.classList.add('left')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList.add('cbox')
    const h1 = document.createElement('h3');
    h1.classList.add('title')
    left.append(checkbox, h1)
    h1.textContent = title;
    const right = document.createElement('div')
    right.classList.add('right')
    const h2 = document.createElement('button');
    h2.classList.add('see-more')
    h2.textContent = "See More"
    const desc = document.createElement('h3')
    desc.classList.add('desc')
    desc.textContent = description
    
    const h3 = document.createElement('h3');
    h3.classList.add('dueDate')
    h3.textContent = dueDate;
    const h4 = document.createElement('h3');
    h4.classList.add('priority')
    h4.textContent = priority
    const h5 = document.createElement('button')
    h5.textContent = 'edit'
    const h6 = document.createElement('h4')
    h6.classList.add('remove')
    h6.textContent = 'trash'

    right.append(h2, desc, h3, h4, h5, h6)
    const newToDo = document.createElement('div')
    newToDo.classList.add('to-do')
    newToDo.setAttribute('data-id', id)
    newToDo.append(left, right)
    return newToDo
}
function addNewTaskBtn(){
    const newTask = document.createElement('div')
    newTask.classList.add('new-task')
    const newTaskBtn = document.createElement('button')
    newTaskBtn.classList.add('addNewTask')
    newTaskBtn.textContent = '+'
    newTask.appendChild(newTaskBtn)
    return newTask
}
function updateDisplayedList(array, content){
    if(array.length === 0){
        content.innerHTML = ''
        content.insertAdjacentElement('beforeend', addNewTaskBtn())
    }else {
        array.map(arr =>{
            content.appendChild(createTask(arr.title, arr.dueDate,arr.description, arr.priority, arr.id)) 
            
         })
         content.insertAdjacentElement('beforeend', addNewTaskBtn())
    } 
}
export {createTask, updateDisplayedList} 
