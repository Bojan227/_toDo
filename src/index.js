

import {updateDisplayedList} from './newElements';
// import createToDo from './createToDo';
import './style.css';
// import {createNewProject, appendNewProject} from './createNewProject';
const navBar = document.querySelector('.nav-bar')

const mainContent = document.querySelector('.main-content')
const myToDo = [
    {
        category: 'Work',
        title: "Make app",
        desc: "blah",
        dueDate: "27 Feb",
        priority: "high",
        id: 0,
    },
    {
        category: 'Gym',
        title: "100 Reps",
        desc: "blah",
        dueDate: "27 Feb",
        priority: "high",
        id: 1,
    },
    {
        category: 'Study',
        title: "Do Homework",
        desc: "blah",
        dueDate: "27 Feb",
        priority: "high",
        id: 2,
    },
    {
        category: 'Work',
        title: "Do sth...",
        desc: "blah",
        dueDate: "27 Feb",
        priority: "high",
        id: 3,
    },
    {
        category: 'Work',
        title: "Hey",
        desc: "blah",
        dueDate: "27 Feb",
        priority: "high",
        id: 4,
    },
    {
        category: 'Study',
        title: "Do Exercise",
        desc: "blah",
        dueDate: "27 Feb",
        priority: "high",
        id: 5,
    },

]
updateDisplayedList(myToDo, mainContent)

function filterTasks(arr, category){
    let result = arr.filter(task => {
       
        if(task.category.toLowerCase() === category || category === 'home'){
            mainContent.innerHTML = ''
            
            return task
        }
       
        
    })
    return result
}
let category = 'home'
navBar.addEventListener('click', (e)=>{
   
    category = e.target.dataset.category
    if(category === undefined){return}
    
   updateDisplayedList(filterTasks(myToDo, category), mainContent)
})




mainContent.addEventListener('click', (e)=>{
   
    if(e.target.className === 'remove'){
        const index = myToDo.map(todo => todo.id).indexOf(parseInt(e.target.parentElement.parentElement.dataset.id))
        myToDo.splice(index, 1)
        console.log(myToDo)
        updateDisplayedList(filterTasks(myToDo, category), mainContent)
    }else if(e.target.className === 'addNewTask'){
        
    }
})