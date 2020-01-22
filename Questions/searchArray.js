//To run JS file 1. Terminal Debug Console 2. Navbar Debug  3. run

const myTodos = ['Salsa', 'Work it out', 'Happy']


//will return -1 because lower case 
console.log(myTodos.indexOf('salsa'))

//returns index number
console.log(myTodos.indexOf('Salsa'))

const newTodos = [{
    title:'Cook',
    isDone:false
}, {
    title:'lift',
    isDone:false
}, {
    title:'Do yoga',
    isDone:false
}]

const filterTodo = newTodos.filter(e => e.title === 'Cook')
console.log(filterTodo)


const index = newTodos.findIndex(function(e, index){
    return e.title === 'lift'
})

console.log(index)

//search for something in an array of objects
//put everything to lowerCase
const findTodo = function(myTodos, title){
    const index = myTodos.findIndex(function (e, index){ 
       return  e.title.toLowerCase() === title.toLowerCase()
    })
    return myTodos[index]
}

let itemFind = findTodo(newTodos, 'Do yoga')
console.log(itemFind)

const findTodo1 = function(myTodos, title){
    const titleReturned = myTodos.find(function(ed, index){
       return ed.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned
}

let logItem1 = findTodo1(newTodos, 'cook')
console.log(logItem1)

