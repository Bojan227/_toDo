
import './style.css';
import {updateDisplay, createTask} from './newElements';
import createToDo from './createToDo';
const navBar = document.querySelector('.nav-bar')
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
        category: 'another',
        title: "100 Reps",
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
        category: 'Dumb',
        title: "Baby",
        desc: "blah",
        dueDate: "27 Feb",
        priority: "high",
    },

]

navBar.addEventListener('click', (e)=>{
    if(e.target.dataset.category === undefined){return}
})