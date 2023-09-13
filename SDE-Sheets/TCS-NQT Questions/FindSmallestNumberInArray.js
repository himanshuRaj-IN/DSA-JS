let solution = function(numsArray){
    let minValue = Number.MAX_VALUE;
    numsArray.forEach(element => {
        if(element< minValue){
            minValue = element;
        }
    });
    return minValue;
}

let output = solution([2,4,5,64,4,33,-2,33,-222]);
console.log(output);