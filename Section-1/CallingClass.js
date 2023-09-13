// First we need to expose that class to public so any one can access it 
//  Module.exports = class person
// Then it need to get imported to file which we wanted to use that class
const Person = require('./Classesss')

let person = new Person('Ramesh','Suresh')
person.fullName()