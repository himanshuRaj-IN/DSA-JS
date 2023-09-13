const flag =  true

if(!flag){
    console.log("conditon Satisfied")
}else{
    console.log("condition Unsatisfied")
}

let count = 1; 
while(count <= 10){
    console.log("i am inside the while loop",count++)
}

count =  1
do{
    count++;
    console.log(" Hi this is inside first do Loop")
}while(count <= 11);

// Note : Never forgot to terminate while with semicolumn in Do while loop Other wise it will turn into infinite loop


for(let i = 0 ; i <= 10 ; i++){
    console.log("This is inside the for loop ", i);
}

                                                                                                  // Note : Why we have many kind of loops We prefer while loop where loop execution is depended on the expression or multiple expression 
//        We prefer for loop when we knwo exactly what amount of time we gonna use this loop 


// Reminder % value  == is  comparing = for the assigning 
// Q : find a number which is divisible by both 2 and 5 with in given range

let EndRange = 20;
for(let count = 2 ; count <= EndRange ; count++){
    if(count % 2  == 0 && count % 5 ==0 ){
        console.log(count)
    }
    if(count == 15 ){
        console.log("breaking th loop ")
        break
    }
}


