

//object manipulation
//object literal
let car = {
    name: 'toyota',
    type: 'sprint',
    engineSize:'1.5 litre'
}

//new keyword
// let person = new Object
// person.name = 'Matthew'
// person.lastName = 'Brown'
// person.age = 23
// person.favFood = 'anything'

//obect.create

let blank = {
    name :null,
    surname: null,
    age: null
}

let newblank = Object.create(blank)
newblank.name = 'matthew'
//delete - use only on objects
//delete person.favFood

//nested objects
const desktop = {
    cpu: 'Ryzen 5',
    ram: '8 gigs',
    hard_drive: {
        first: '1000gigs',
        second:'500gigs'
    }
}

//nested objects in an array
const myObj = {
    name: "Johnathan",
    age: 50,
    cars: [
        {
            name:"Ford", 
            models:["Fiesta", "Focus", "Mustang"]
        },
        {
            name:"BMW", 
            models:["320", "X3", "X5"]
        },
        {
            name:"Fiat", 
            models:["500", "Panda"]
        }
    ]
}

//object method - function inside the object
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function() {
//         return (this.firstName + " " + this.lastName).toUpperCase;
//     }
// };
//will print info to page
document.querySelector('h1').innerHTML = person.fullName();
//wont print function to console
person.fullName()


//for in loop
//have to use object expression where p is used as index with [], square brackts
for(let p in person){
    console.log(person[p])
}

//use nested for in loops to access information

for(i in myObj.cars){
    console.log(myObj.cars[i].name)
    for(x in myObj.cars[i].models){
        console.log(myObj.cars[i].models[x]);
    }
}

//factory functions
//functions that return objects
let person1 = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    },
};
console.log(person1.getFullName());

let person2 = {
    firstName: 'Jane',
    lastName: 'Doe',
    getFullName() {
    return this.firstName + ' ' + this.lastName;
    },
};

console.log(person2.getFullName());
//to avoid repetitive/duplicating code, write function to create/return new object

// function createPerson(firstName, lastName, age){
//     return{
//         firstName:firstName,
//         lastName:lastName,
//         age:age,
//         getFullName(){
//             return this.firstName + ' ' + this.lastName
//         }
//     }
// }


//will take up unneccessary space creating functions in objects so create function in another object


function createPerson(firstName, lastName, age){
    return{
        firstName:firstName,
        lastName:lastName,
        age:age,
    }
}
let personActions = {
    getfullname(){
        return this.firstName + " " + this.lastName
    }
}
let person3 = createPerson('matthew', 'brown', 23)
console.log(person3.getFullName);