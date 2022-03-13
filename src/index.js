import {updateDisplayedList} from './newElements';
import {createToDo, getUniqueId, createNewTask} from './createToDo';
import './style.css';
import {createProject, updateDisplayedProjects} from './createNewProject';
import  {seeDetailsCard, appendSeeDetailsCard} from './details'
import {saveToStorage, getFromStorage} from './localStorage';
import format from 'date-fns/format';

const taskManager = (()=>{

//global variables
const navBar = document.querySelector('.nav-bar')
const mainContent = document.querySelector('.main-content')
const submitTaskBtn = document.querySelector(".submit");
const newTaskForm = document.querySelector('.form-container')
let category = 'home';
let elementId

let myToDo = [
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
myToDo = getFromStorage('myTask')
updateDisplayedList(myToDo, mainContent)
setTodaysDate()
function editTask(a, b, c, d){
    myToDo[getIndex(myToDo, elementId)].title = a
    myToDo[getIndex(myToDo, elementId)].dueDate = b
    myToDo[getIndex(myToDo, elementId)].priority = c
    myToDo[getIndex(myToDo, elementId)].desc = d

}
function markAsComplete(a, style1, style2){
    a.style.textDecoration = style1
    a.style.backgroundColor = style2
}
function setTodaysDate(){
    const today = document.querySelector("h1[data-category = 'today']")
    today.setAttribute('data-category', format(new Date(), 'MM/dd/yyyy') )
}
function filterTasks(arr, category){
    let result = arr.filter(task => {
        if(task.category.toLowerCase() === category || category === 'home'){
            mainContent.innerHTML = ''
            return task
        }
        if(task.dueDate === category){
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

navBar.addEventListener('click', (e)=>{
    if(!e.target.dataset.category){return}
    if(category === undefined){return}
    category = e.target.dataset.category
    
   updateDisplayedList(filterTasks(myToDo, category), mainContent)
})


mainContent.addEventListener('click', (e)=>{
    elementId = e.target.parentElement.parentElement.dataset.id
    if(e.target.className === 'remove'){
        myToDo.splice(getIndex(myToDo, elementId), 1)
        // saveToStorage('myTask', myToDo)
        updateDisplayedList(filterTasks(myToDo, category), mainContent)
    }else if(e.target.className === 'addNewTask'){
        
        newTaskForm.classList.remove('none') 
        
    }else if(e.target.className === 'details'){
        
        appendSeeDetailsCard(seeDetailsCard(myToDo[getIndex(myToDo, elementId)].title, myToDo[getIndex(myToDo, elementId)].dueDate, myToDo[getIndex(myToDo, elementId)].desc))
    }else if(e.target.className === 'edit'){
        
        editTask('Do shit', '20 Mar', 'medium', 'anything')
        // saveToStorage('myTask', myToDo)
        updateDisplayedList(filterTasks(myToDo, category), mainContent)
    }else if(e.target.className === 'cbox'){
        if(e.target.checked){
            markAsComplete(e.target.parentElement.parentElement, 'line-through', 'lightgreen')
        }
        if(!e.target.checked){
            markAsComplete(e.target.parentElement.parentElement, 'none', 'white')
        }
    }
})
submitTaskBtn.addEventListener('click', ()=>{
        myToDo.push(createNewTask(myToDo))
        // saveToStorage('myTask', myToDo)
        updateDisplayedList(filterTasks(myToDo, category), mainContent)
        newTaskForm.classList.add('none')
})
return {getIndex}

})();


const projectManager = (()=>{
    // global variables
    const projectList = document.querySelector('.project-list')
    const categoryDropDown = document.querySelector("select[name = 'category']");
    const addNewProjectBtn = document.querySelector('.addNewProject')
    let myProjectsArray = [
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
    myProjectsArray = getFromStorage('myProject')
    updateDisplayedProjects(myProjectsArray, projectList, categoryDropDown)

    addNewProjectBtn.addEventListener('click', (e)=>{
        projectList.innerHTML = ''
        categoryDropDown.innerHTML = ''
        const newProject = createProject('Cook', getUniqueId(myProjectsArray))
        myProjectsArray.push(newProject)
        saveToStorage('myProject', myProjectsArray)
        updateDisplayedProjects(myProjectsArray, projectList, categoryDropDown)
    })
    projectList.addEventListener('click', (e)=>{
        let elementId = e.target.parentElement.dataset.id
        
        
        if(e.target.className === 'removeProject'){
            myProjectsArray.splice(taskManager.getIndex(myProjectsArray, elementId), 1)
            saveToStorage('myProject', myProjectsArray) 
            projectList.innerHTML = ''
            categoryDropDown.innerHTML = ''
            updateDisplayedProjects(myProjectsArray, projectList, categoryDropDown)
        }
        
    })
})();






const dateInput = document.getElementById('date')
