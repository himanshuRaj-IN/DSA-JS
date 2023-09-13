// Arrays : Js 

//  To store fixed amount of data in the array
//  New KeyWord is the memory Location Operator 

let listOfSubject = Array(6)
listOfSubject = new Array(49,494,39393,999,"dfklsd")

// Optional and most used cocept is like declering with the variable
listOfSubjectTest = [38,3893,99, 93,"Himanshu"]

// Accessing and updating element of the array 
console.log(listOfSubjectTest[2])
listOfSubjectTest[2] = "Hi This is Updated Message"
console.log(listOfSubjectTest[2])

// Pushing element to the array 
listOfSubjectTest.push("This is the pushed element in the Array")
console.log(listOfSubjectTest)

// Removing the Element from the back side 
listOfSubjectTest.pop()
console.log(listOfSubjectTest)

// Adding element at the start of the array 
listOfSubjectTest.unshift("Added in the front")
console.log(listOfSubjectTest)

// Find elment position in the array return -1 is not Present 
let index = listOfSubjectTest.indexOf(38333)
console.log("Index of the Element",index)

// Check if Element is Present Or not return boolean 
let isPresent = listOfSubjectTest.includes(93)
console.log(isPresent)

// Slice Array Based on the Indexing of the element
let slicedArray = listOfSubjectTest.slice(2,4)
console.log(slicedArray);

// To Get the length of the array 

// iterating though the array
for(let i = 0 ; i < listOfSubjectTest.length;i++){
    console.log("Printing the Array Element ----> ", listOfSubjectTest[i])
}

// Q : Implement Code to print sum of the Array 
// conventional Approach 
let num = [12,22,33,43,22,11,3]
let sum = 0
for(let i = 0 ; i < num.length ; i++){
    sum +=num[i]
}
console.log("Final Sum of the Sum Array is : ",sum)

// Reduce Filter Map 
// So Basically what is does is do is Pull the each element and Place is in the place of the element place holder
// Takes the anonymus function which we can perform any operation which we wanted to do on the element.

// num.reduce((Accumulator, elementPlaceholder)=> <Do the Operation You want to do to achive th desired result> ,AccumulatorInilizedHere)

let Total = num.reduce((sum,element)=>sum+element,100000)
console.log(Total)

// Q : Print Elements which are Even Numbers 

let number = [12, 88,27,46, 9,76,77]
// number = num.reduce(())

for(let i = 0 ; i < number.length ; i++){

    if(number[i] % 2 == 0){
        console.log(number[i]+" --> EVEN")
    }else{
        console.log(number[i]+" --> ODD")
    }
}

// let even = number.reduce((acc,ele) =>{
//     if(ele %2 ==0 ){acc.push(ele)}
// },[])
// console.log(even)

// Notes : FILTER push the element in the new Array when filter push in to the new array based on the what filter you provide 

let filteredEvenNumber = number.filter(filteredEven => filteredEven%2 ==0)
console.log(filteredEvenNumber)

//  Map Array Function 
// Map Function Will modify each and every Value of the array  

// Task : Convert all element into the odd 

let mappedArray = filteredEvenNumber.map(mapE=>mapE-1)
console.log(mappedArray)

let FinalSum = mappedArray.reduce((accumulator,element) => accumulator+element,0)
console.log(FinalSum)

// Chaining up the array methods 
let num2 = [2,3,4,5,6,7,8,9]
// First Filter Array of odd Numbers and then make it even and then add the commulative sum of the element
let FinalValue = num2.filter(oddNumbers => oddNumbers % 2 != 0).map(addOne => addOne+1).reduce((sum,ele)=> sum+ele,0)
console.log("Method Chainig Value -->",FinalValue)

// Shorting in the Array 
// Two Type String Array or Number
// By Default Array Sorting is Based on the String so simple sort won't work on the numbers
let FruitArray = ['apple', 'manngo','kismish', 'banana']
console.log(FruitArray.sort())


let NumberArray = [34,83,009,000008,33]
console.log(NumberArray.sort())

// For Number Sort and all We need to provide Custom logic the sort method 
console.log(NumberArray.sort((a,b)=> a-b)) // It work lik Bubble sort need to explore

// For Reversing the Array We and use simply reverse method by extending .operator
console.log(NumberArray.sort((a,b)=> a-b).reverse())
// Another approach is by changing sort custom logic 
console.log(NumberArray.sort((a,b)=> b-a))

