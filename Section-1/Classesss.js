// object oriented concept of the javascript is introduced in javascript in es6 only

module.exports = class Person{

    age = 25// this is class variable
    // We can set properties like this also and thsi is higheley suggestable we can wrap multiple line of codes to acheve
    //and it is recommended woy to do so  
    get location (){
        return "Bagmane Solarium City Neon Dodenkundi extension"
    }
    // Cosnstructer is method is method which intilize automatically when new object is created 
    // first name and last name is instance variable 
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
        // Since these varible depends on the instance of the class so we call it as the instance variable

    }

    // Method
    fullName(){
        console.log(this.firstName+this.lastName
            )
    }
}

// let himan = new Person("Himanshu", "raj")
// console.log(himan.age)
// console.log(himan.location)
// console.log(himan.firstName)
// himan.fullName();

// module.exports = class Person