
let number = 5; 
let isEven = false; 
let isOdd = false;
let resultMessage = "";

if (number % 2 === 0) {
    isEven = true;
    resultMessage = `The number ${number} is even.`;
} else {
    isOdd = true;
    resultMessage = `The number ${number} is odd.`;
}

console.log(resultMessage);
