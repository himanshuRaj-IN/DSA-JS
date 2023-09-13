// Sum Zero 
/**
 * input Array is sorted 
 * Return the first pair the element which return the sum of element become zero 
 * else return undefined 
 * 
 */

function sumZero(inpArr){
    // Intilizing two pointer for the traversing the array
    let leftPtr = 0
    let rightPtr = inpArr.length-1

    // Trying to find the pair while traversing the loop 
    while(leftPtr < rightPtr){
        let sum = inpArr[leftPtr]+inpArr[rightPtr] 
        if(sum == 0 ) return [inpArr[leftPtr], inpArr[rightPtr]]
        if(sum > 0) rightPtr--
        else leftPtr++
    }
    
}

console.log(sumZero([-3,-2,1,0,-8,9,88]))
