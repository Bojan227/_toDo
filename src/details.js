function seeDetailsCard(title, dueDate, desc){
    const container = document.createElement('div')
    container.classList.add('details')

    const header = document.createElement('h1')
    header.textContent = title

    const date = document.createElement('h3')
    date.textContent = dueDate


    const description = document.createElement('h3')
    description.textContent = desc

    container.append(header, date, description)
    return container

}
function appendSeeDetailsCard(element){
    const detailsContainer = document.querySelector('.seeDetails')
    detailsContainer.innerHTML = ''
    detailsContainer.appendChild(element)
}
export {seeDetailsCard, appendSeeDetailsCard}