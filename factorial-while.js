// function getFactorial(number) {
//     let factorial = 1;
//     let i = 1;
//     while (i <= number) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }
// let firstNumber = 7;
// let firstFactorial = getFactorial(firstNumber);
// console.log('Factorial of 7 using While loop is: ', firstFactorial);


// let secondNumber = 9;
// let secondFactorial
//     = getFactorial(secondNumber);
// console.log('Factorial of 9 Using While Loop is: ', secondFactorial);


// function getFactorial(number) {
//     let factorial = 1;
//     let i = number;
//     while (i >= 1) {
//         factorial = factorial * i;
//         i--;
//     }
//     return factorial;
// }
// let firstNumber = 7;
// let firstFactorial = getFactorial(firstNumber);
// console.log('Factorial of 7 using While loop is: ', firstFactorial);


//For Loop Reverse
function getFactorial(number) {
    let factorial = 1;
    for (let i = 7; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}

let firstNumber = 7;
let firstFactorial = getFactorial(firstNumber);
console.log('Factorial of 7 using While loop is: ', firstFactorial);