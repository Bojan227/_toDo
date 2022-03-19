function seeDetailsCard(title, dueDate, desc){
    
    const header = document.querySelector('.titleDesc')
    header.value = title

    const date = document.querySelector('.dateDesc')
    date.value = dueDate

    const description = document.querySelector('.descCont')
    description.value = desc

}



export default seeDetailsCard