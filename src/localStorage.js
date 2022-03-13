function saveToStorage(key ,array){
    localStorage.setItem(key, JSON.stringify(array));
}

function getFromStorage(key){
   return JSON.parse(localStorage.getItem(key))
    
}
export {saveToStorage, getFromStorage}