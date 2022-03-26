import format from 'date-fns/format';
import capitalizeFirstLetter from './capitalize';
import trash from './icons/delete.png'


function setPriorityColour(priority, element){
    const prio = priority.toLowerCase()
    if(prio === 'high'){
        element.classList.add('priority-high')
    }else if(prio === 'medium'){
        element.classList.add('priority-medium')
    }else {
        element.classList.add('priority-low')
    }

}
function createTask(title, dueDate, description, priority, id){
    const left = document.createElement('div')
    left.classList.add('left')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList.add('cbox')

    const h1 = document.createElement('h3');
    h1.classList.add('title')
    left.append(checkbox, h1)
    h1.textContent = capitalizeFirstLetter(title);

    const right = document.createElement('div')
    right.classList.add('right')

    const h2 = document.createElement('button');
    h2.classList.add('detailsBtn')
    h2.textContent = "Details/Edit"

    const desc = document.createElement('h3')
    desc.classList.add('desc')
    desc.textContent = description
    
    const h3 = document.createElement('h3');
    h3.classList.add('dueDate')
    console.log(dueDate)
    h3.textContent = format(new Date(dueDate), "d MMM");
   
    
    
    const h6 = document.createElement('img')
    h6.classList.add('remove');
    h6.src = trash;

    right.append(h2, desc, h3, h6)
    const newToDo = document.createElement('div')
    newToDo.classList.add('to-do')
    setPriorityColour(priority, newToDo)
    newToDo.setAttribute('data-id', id)
    newToDo.setAttribute('data-date', dueDate)
    newToDo.append(left, right)
    return newToDo
}

function addNewTaskBtn(){
    
    const newTaskBtn = document.createElement('button')
    newTaskBtn.classList.add('addNewTask')
    newTaskBtn.textContent = 'Add New Task';
   
    
    return newTaskBtn
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
