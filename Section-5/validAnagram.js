// Valid Anagram 
/*
    Explaination : its like can we reform the string with the same amount of the character
                    No of the character is also limited to form new word 
*/


function isValidAnagram(str1, str2){
    //Edge Case : if length is not equal simply return false 
    if(str1.length !== str2.length) return false
    // Counting the Character of the each string and storing in the object
    let feqStr1 = {}
    let feqStr2 = {}
    for(let char of str1){
        if(char in feqStr1){
            feqStr1[char] = feqStr1[char] +1
        
        }else{
            feqStr1[char] = 1
        }
    }

    for(let char of str2){
        feqStr2[char] = char in feqStr2 ? feqStr2[char]+1 : 1
    }
    // console.log(feqStr1)
    // console.log(feqStr2)
    for(let key in feqStr1){
        if(! key in feqStr2) return false
        if(feqStr1[key] !== feqStr2[key]) return false
    }
    return true
}
console.log(isValidAnagram("himanshu", "himanshu"))
console.log(isValidAnagram("textwiseaddition", "additionwisetext"))
console.log(isValidAnagram("", ""))
console.log(isValidAnagram("ramesh", "suresh"))
console.log(isValidAnagram("ramesh", "sur"))
