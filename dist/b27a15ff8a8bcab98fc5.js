

import {createTask, updateDisplayedList } from './newElements';
// import createToDo from './createToDo';
import './style.css';
// import {createNewProject, appendNewProject} from './createNewProject';
const navBar = document.querySelector('.nav-bar')

const newProjectBtn = document.querySelector('.add')
const mainContent = document.querySelector('.main-content')
const myToDo = [
    {
        category: 'Work',
        title: "Make app",
        desc: "blah",
        dueDate: "27 Feb",
        priority: "high",
    },
    {
        category: 'Gym',
        title: "100 Reps",
        desc: "blah",
        dueDate: "27 Feb",
        priority: "high",
    },
    {
        category: 'Study',
        title: "Do Homework",
        desc: "blah",
        dueDate: "27 Feb",
        priority: "high",
    },
    {
        category: 'Work',
        title: "Do sth...",
        desc: "blah",
        dueDate: "27 Feb",
        priority: "high",
    },
    {
        category: 'Work',
        title: "Hey",
        desc: "blah",
        dueDate: "27 Feb",
        priority: "high",
    },
    {
        category: 'Study',
        title: "Do Exercise",
        desc: "blah",
        dueDate: "27 Feb",
        priority: "high",
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
    console.log(e.target)
    category = e.target.dataset.category
    console.log(category)
    
   updateDisplayedList(filterTasks(myToDo, category), mainContent)
})
