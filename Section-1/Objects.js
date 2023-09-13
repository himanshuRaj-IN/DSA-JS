// What are Objects in Javascript
// Object is like collection of the properties
//  Properities can be defined into the keyvalue pair
let person = {
    firstName : 'Himanshu',
    lastName  : 'Raj',
    contactNumber : 8284919907,
    fullName : function(){
       return  this.firstName+' '+this.lastName
    }
}
console.log("Hi, My Name is "+ person.firstName + person.lastName + 'you can call me on '+ person.contactNumber +' :)') 

// To Update exsisting Property 
person.firstName = 'Dipanshu'

// To Add New Properties 
person.age = 22

console.log('My Age is : '+person.age)
console.log(person)

//for deleting the object  properties 

delete person.contactNumber
console.log(person)

// Check if Properties exists 
let isTrue = 'age' in person
let isTrue2 = 'age22' in person
console.log(isTrue)
console.log(isTrue2)

// Iterate through the all properties
for(let key in person){
    console.log(key +' : ' + person[key])
}

// calling the function decleaed inside the object 
console.log(person.fullName())