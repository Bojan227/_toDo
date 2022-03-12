import {updateDisplayedList} from './newElements';
import createToDo from './createToDo';
import './style.css';
import {createProject, updateDisplayedProjects} from './createNewProject';
import  {seeDetailsCard, appendSeeDetailsCard} from './details'

const taskManager = (()=>{

//global variables
const navBar = document.querySelector('.nav-bar')
const mainContent = document.querySelector('.main-content')
let category = 'home';
let elementId

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
        priority: "medium",
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

function editTask(a, b, c, d){
    myToDo[getIndex(myToDo, elementId)].title = a
    myToDo[getIndex(myToDo, elementId)].dueDate = b
    myToDo[getIndex(myToDo, elementId)].priority = c
    myToDo[getIndex(myToDo, elementId)].desc = d

}
function filterTasks(arr, category){
    let result = arr.filter(task => {
       
        if(task.category.toLowerCase() === category || category === 'home'){
            mainContent.innerHTML = ''
            
            return task
        }
       
        
    })
    return result
}
function getIndex(array, elementId){
    const index = array.map(arr => arr.id).indexOf(parseInt(elementId))
    return parseInt(index)
}
function getUniqueId(array){
    const arrayOfIds = array.map(arr => arr.id)
        let lastUniqueId
        if(arrayOfIds.length === 0){
            lastUniqueId = -1
        }else{
            lastUniqueId = arrayOfIds[arrayOfIds.length - 1]
        }
         lastUniqueId++
         return lastUniqueId
}
navBar.addEventListener('click', (e)=>{
   
    
    if(!e.target.dataset.category){return}
    if(category === undefined){return}
    category = e.target.dataset.category
   updateDisplayedList(filterTasks(myToDo, category), mainContent)
})

mainContent.addEventListener('click', (e)=>{
    elementId = e.target.parentElement.parentElement.dataset.id
    console.log(elementId)
    if(e.target.className === 'remove'){
        myToDo.splice(getIndex(myToDo, elementId), 1)
        console.log(myToDo)
        updateDisplayedList(filterTasks(myToDo, category), mainContent)
    }else if(e.target.className === 'addNewTask'){
        
        const newTask = createToDo('Work', 'Verify 100 records', 'Verify them until 1pm', 'Mar 03', 'Medium', getUniqueId(myToDo))
        myToDo.push(newTask)
        
        updateDisplayedList(filterTasks(myToDo, category), mainContent)
    }else if(e.target.className === 'details'){
        
        appendSeeDetailsCard(seeDetailsCard(myToDo[getIndex(myToDo, elementId)].title, myToDo[getIndex(myToDo, elementId)].dueDate, myToDo[getIndex(myToDo, elementId)].desc))
    }else if(e.target.className === 'edit'){
        console.log( myToDo[getIndex(myToDo, elementId)].dueDate)
        editTask('Do shit', '20 Mar', 'medium', 'anything')
        updateDisplayedList(filterTasks(myToDo, category), mainContent)
    }
})
return {getUniqueId, getIndex}

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
        const newProject = createProject('Cook', taskManager.getUniqueId(myProjectsArray))
        myProjectsArray.push(newProject)
        updateDisplayedProjects(myProjectsArray, projectList)
    })
    projectList.addEventListener('click', (e)=>{
        let elementId = e.target.parentElement.dataset.id
        
        
        if(e.target.className === 'removeProject'){
            myProjectsArray.splice(taskManager.getIndex(myProjectsArray, elementId), 1) 
            projectList.innerHTML = ''
            updateDisplayedProjects(myProjectsArray, projectList)
        }
        
    })
})();







