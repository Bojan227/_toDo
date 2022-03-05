import {updateDisplayedList} from './newElements';
import createToDo from './createToDo';
import './style.css';
import {createProject, updateDisplayedProjects} from './createNewProject';

const taskManager = (()=>{

//global variables
const navBar = document.querySelector('.nav-bar')
const mainContent = document.querySelector('.main-content')
let category = 'home'

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
        const arrayOfIds = myToDo.map(todo => todo.id)
        let lastUniqueId
        if(arrayOfIds.length === 0){
            lastUniqueId = -1
        }else{
            lastUniqueId = arrayOfIds[arrayOfIds.length - 1]
        }
        lastUniqueId++
        const newTask = createToDo('Work', 'Verify 100 records', 'Verify them until 1pm', 'Mar 03', 'Medium', lastUniqueId)
        myToDo.push(newTask)
        updateDisplayedList(filterTasks(myToDo, category), mainContent)
    }
})
})();

const projectManager = (()=>{
    // global variables
    const projectList = document.querySelector('.project-list')
    const addNewProjectBtn = document.querySelector('.addNewProject')
    const myProjectsArray = [
        {
            title: "gym",
            id: 0,
        },
        {
            title: "Study",
            id: 1,
        },
        {
            title: "work",
            id: 2,
        },

    ]
    updateDisplayedProjects(myProjectsArray, projectList)

    addNewProjectBtn.addEventListener('click', (e)=>{
        projectList.innerHTML = ''
        const arrayIds = myProjectsArray.map(project => project.id)
        let uniqueId
        
        if(arrayIds.length === 0){
            uniqueId = -1
        }else{
            uniqueId = arrayIds[arrayIds.length - 1]
        } 
        uniqueId++
        
        const newProject = createProject('Cook', uniqueId)
        myProjectsArray.push(newProject)
        console.log(myProjectsArray)
        updateDisplayedProjects(myProjectsArray, projectList)
    })
    // projectList.addEventListener('click', (e)=>{
        
    //     if(e.target.className === 'addNewProject'){
    //         projectList.innerHTML = ''
    //         const arrayIds = myProjectsArray.map(project => project.id)
    //         let uniqueId
            
    //         if(arrayIds.length === 0){
    //             uniqueId = -1
    //         }else{
    //             uniqueId = arrayIds[arrayIds.length - 1]
    //         } 
    //         uniqueId++
            
    //         const newProject = createProject('Cook', uniqueId)
    //         myProjectsArray.push(newProject)
    //         console.log(myProjectsArray)
    //         updateDisplayedProjects(myProjectsArray, projectList)
    //     }
    // })
})();








