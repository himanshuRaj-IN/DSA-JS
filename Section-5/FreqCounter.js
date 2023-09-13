// Pattern : Frequency Counter

/*
Problem Statement : two array in first array some number is given in second 
    array square of each element must be present with respective of no of 
    occurance in first array 
    Example : same([1,2,3],[1,9,4]) return true; 
              same([1,2,2],[1,2,2]) return false;
              same([1,2,2],[1,4,4]) return true;

*/

function same(arr1, arr2){
    //if length is not same return false 
    if(arr1.length !== arr2.length) return false
    // Intilize frequency Counter for both the array
    let feqCounterArr1 = {}
    let feqCounterArr2 = {}  
    for(let val of arr1){
        if(val in feqCounterArr1){
            feqCounterArr1[val] = feqCounterArr1[val]+1
        }else{
            feqCounterArr1[val] = 1
        }
    }
    for(let val of arr2){
        if(val in feqCounterArr2){
            feqCounterArr2[val] = feqCounterArr2[val]+1
        }else{
            feqCounterArr2[val] = 1
        }
    }

    // Comparison Login to compare two array in the two objects 
    for(let key in feqCounterArr1){
        if(!(key*key) in feqCounterArr2){
            return false;
        }
        if(feqCounterArr1[key] !== feqCounterArr2[key*key]){
            return false
        }

    }
    return true
}

console.log(same([1,2,3],[1,4,9,4]))