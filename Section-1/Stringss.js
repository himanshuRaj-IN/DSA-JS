// Declearing String in js 
// can be decleared with the single and double quotes

let names = 'himanshuadjf'
// To get Length of the string 
console.log(names.length)
// To Get SubString first argument is inclucive and 2nd is exclusive
console.log(names.slice(0,3))
// Access the element character wise
console.log(names[4])
// Split the string in two parts and return type weill be array
let output = names.split('a')
console.log(output)

// Trim leading and trialing white space 
let trimExample = 'test    '
console.log(trimExample.length)
console.log(trimExample.trim().length)

// Type caste string to integer
// by default value is taken as sting

let num = '31'
let num2 = '2'
let mul = num*num2
console.log(mul) // Return weired output 
console.log(parseInt(num)-parseInt(num2))

mul.toString() // typecaste back to string 

// Concatinate two string in js 
// use + operator

let str1 = "test--"
let str2 = "concat"
let output2= str1+str2
console.log(output2)

// finding index of the particular pattern inthe string 
let testData = "this is the test data which we are using"
// .indexOf('pattern',indexFromWhereWeshouldStartSearch)  Notfound return -1
console.log(testData.indexOf('data'))

// Q : Find the Occurances of the word or character in the String
let str5 = "himanshudkkjfhu dfhdhukdfjhu djfdhu"
let count = 0
let indexToStart = str5.indexOf('hu')
while(indexToStart != -1){
    count++
    indexToStart = str5.indexOf('hu',indexToStart+1)
}
console.log(count)