export default function capitalizeFirstLetter(word){
    const array = word.split(' ')
   const newArray = array.map(wrd => {
        const first = wrd.slice(0, 1).toUpperCase()
        const second = wrd.slice(1).toLowerCase()
        return `${first}${second}`
    })

    const newString = newArray.join(" ")
    return newString
    
}