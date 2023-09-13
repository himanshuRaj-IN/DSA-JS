/** countUnqueValue 
 * 
 * -> function takes the sorted integer array and return the count of the 
 *    unique values in the array 
 * 
 * @param {Accept the sorted Array } inpArrr 
 */
function countUniqueValue(inpArrr){
    // Edge Case : if length is less than 2 return the length 
        if(inpArrr.length < 2) return inpArrr.length
        
    // intilizing the pointer the to traverse the array 
    let slow = 0 
    let fast = 1
    let count = 1 

    // Traversing the array and finding the unique one  
    while(slow < inpArrr.length-1){
        if(inpArrr[slow] === inpArrr[fast]){
            fast++
        }else{
            slow = fast
            fast++
            count++
        }
    }

return count
}

console.log("________________________________________________")
console.log("---------------------Output---------------------")
console.log('`````````````````````````````````````````````````')
console.log(countUniqueValue([1,1,1,1,2,2,3,3,4,4,5,5,6,6,6,6,7]))