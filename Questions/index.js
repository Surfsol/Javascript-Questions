const myPersonalObject = {  
    firstName: 'Fred',  
    lastName: 'Flintstone',  
    }; 

   <p>Object.keys() -> Gives us an array back of the Object's properties/keys  </p> 

    const keys = Object.keys(myPersonalObject);  
    returns ['firstName', 'lastName'];  


    <p>Object.values() -> Gives us an array back of all the Object's values  </p>

const values = Object.values(myPersonalObject);  
returns ['Wilma', 'Flintstone'];

<p>Object.entries() -> Gives us back an array of the Object's key/value pairs as a `tuple`  </p>

const entries = Object.entries(myPersonalObject);  
returns [ [ 'firstName', 'Wilma' ], [ 'lastName', 'Flintstone' ] ]​​​​​  




const parts = [motor, brakes, wheel, seat]


for(let i =0; i< parts.length; i++){
    console.log(parts[i])
}

Callbacks



function showparts(array, callback){
    callback(array[0])
}

showparts(parts,(firstpart)=> {
    console.log(firstpart)
})


built in callbacks in es6

parts.forEach(element, index => {
    alert(element, index)
});

//map can create a new array
const newArray = parts.map((element, index)=> {
    return `${element} ${index}`
})