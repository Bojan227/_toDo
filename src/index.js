

import {updateDisplay} from './newElements';
import createToDo from './createToDo';
import './style.css';
import {createNewProject, appendNewProject} from './createNewProject';
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
updateDisplay(myToDo, mainContent)
navBar.addEventListener('click', (e)=>{
    
   const result = myToDo.filter(todo =>{
    if(e.target.dataset.category === undefined){return}
    if(todo.category.toLowerCase() === e.target.dataset.category || e.target.dataset.category === 'home'){
        mainContent.innerHTML = ''
        return todo
    }
    if(todo.category.toLowerCase() !== e.target.dataset.category){
        mainContent.innerHTML = ''
    }
   })
   updateDisplay(result, mainContent)
})
newProjectBtn.addEventListener('click', ()=>{
    let newProjectInput = document.getElementById('new-project')
    appendNewProject(createNewProject(newProjectInput))
    newProjectInput.value = '';
})