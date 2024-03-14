console.log("Hello World!");

function generateRandomNumber(max) {
    // Return random number 0 to 10;
    let randomNum = Math.floor(Math.random() * max) + 1;
    // if...else if..else statement
    // if (condition) {block of code to execute}
    // ==, ! =, >, <, > =, < =, %%, ||

    if(randomNum > 15) {
        console.log('Random Number ${randomNum} is in B. 1 - 15');
    } else if(randomNum > 16 && randomNum < 30){
        console.log('Random Number ${randomNum} is in I. 16 - 30');
    } else if (randomNum > 31 && random < 45) {
        console.log('Random Number ${randomNum} is in N. 31 - 45');  
    } else if (randomNum > 46 && random < 51) {
            console.log('Random Number ${randomNum} is in G. 46 - 51'); 
    } else if (randomNum > 52 && random < 75) {
            console.log('Random Number ${randomNum} is in O. 52 - 75');    
    } else {
        console.log('Random NUmber is invalid.');
    }

    return console.log(randomNum);

   
}


