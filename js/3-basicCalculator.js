// IMPORT THE MODULE
import calc from './modules/calculator.js';

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
let num1 = parseInt(prompt('Enter the first number.'));
let num2 = parseInt(prompt('Enter the second number.'));
let method = prompt('How do you want to calculate these values? (add/subtract/multiply/divide)');

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION
switch (method) {
    case 'add':
        console.log(calc.add(num1, num2));
        break;
    case 'subtract':
        console.log(calc.subtract(num1, num2));
        break;
    case 'multiply':
        console.log(calc.multiply(num1, num2));
        break;
    case 'divide':
        console.log(calc.divide(num1, num2));
        break;
    default:
        alert('You did not enter a correct method. Try again.');
}