import format from 'date-fns/format';

const createToDo = (category, title, desc, dueDate, priority, id) => ({
    category,
    title,
    desc,
    dueDate,
    priority,
    id,
})
function getUniqueId(array){
    const arrayOfIds = array.map(arr => arr.id)
        let lastUniqueId
        if(arrayOfIds.length === 0){
            lastUniqueId = -1
        }else{
            lastUniqueId = arrayOfIds[arrayOfIds.length - 1]
        }
         lastUniqueId += 1
         return lastUniqueId
}

function createNewTask(arr){
    const titleInput = document.getElementById('title');
    const dueDateInput = document.getElementById('dueDate');
    const selectPriority = document.getElementById('priority')
    const priorityInput = selectPriority.value
    const descriptionInput = document.getElementById('description')
    const selectedCategory = document.getElementById('category') 
    const categoryInput = selectedCategory.value

    const newTask = createToDo(categoryInput, titleInput.value, descriptionInput.value, format(new Date(dueDateInput.value),  'MM/dd/yyyy'), priorityInput ,getUniqueId(arr))

    return newTask
}

export {getUniqueId, createNewTask}