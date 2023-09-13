// What is Function and how and what are the usage of the function?
// To execute a block of code wrapping them in to a block of code we name it as function.
// Or We can give nice name to maintain code and reduce repetation in the code


// Named Function and Anoynamus function

// Named function is like the Normal function used in the other different languages

function sum(a,b){
    return a+b;
}
let sumOfTwo = sum(5,8)
console.log(sumOfTwo)

// Decleaaring it as anonymous function

let sum2 = function(a,b){
    return a+b
}
console.log(sum2(8,8))

// Another Way is 
let sum3=(a,b)=> a+b
console.log(sum3(7,9))