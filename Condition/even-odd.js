//Checks if the number even/odd
const prompt = require("prompt-sync")();
const num = prompt("Enter a number: ");

//check if the number is even
if(num % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}