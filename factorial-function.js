// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//     factorial = faactorial * i;
// }
// console.log(factorial);

function getfactorial(factNumber) {
    let factorial = 1;
    for (let i = 1; i <= factNumber; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
let firstNumber = 7;
let firstFactorial = getfactorial(firstNumber);
console.log('Factorial of 7 Is : ', firstFactorial);

let secondNumber = 9;
let secondFactorial = getfactorial(secondNumber);
console.log('Factorial of 9 is : ', secondFactorial);

//For Loop Reverse
// function getFactorial(number) {
//     let factorial = 1;
//     for (let i = 7; i >= 1; i--) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }

// let firstNumber = 7;
// let firstFactorial = getFactorial(firstNumber);
// console.log('Factorial of 7 using While loop is: ', firstFactorial);


