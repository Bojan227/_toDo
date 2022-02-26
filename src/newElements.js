function createTask(tit, date, prio){
    const left = document.createElement('div')
    left.classList.add('left')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList.add('cbox')
    const h1 = document.createElement('h3');
    h1.classList.add('title')
    left.append(checkbox, h1)
    h1.textContent = tit;
    const right = document.createElement('div')
    right.classList.add('right')
    // const h2 = document.createElement('h3');
    // h2.classList.add('description')
    // h2.textContent = desc;
    const h3 = document.createElement('h3');
    h3.classList.add('dueDate')
    h3.textContent = date;
    const h4 = document.createElement('h3');
    h4.classList.add('priority')
    h4.textContent = prio
    const h5 = document.createElement('button')
    h5.textContent = 'edit'
    const h6 = document.createElement('h4')
    h6.textContent = 'trash'

    right.append(h3, h4, h5, h6)
    const newToDo = document.createElement('div')
    newToDo.classList.add('to-do')
    newToDo.append(left, right)
    return newToDo
}
function updateDisplay(array, content){
    array.map(arr =>{
       content.appendChild(createTask(arr.title, arr.dueDate, arr.priority)) 
    })
}
export {createTask, updateDisplay} 
