// IMPORT THE MODULE
import calc from './modules/calculator.js';

// Prompt user for first number (assign value to variable number1)
let number1 = parseInt(prompt('Enter the first number.'));

// Prompt user for second number (assign value to variable number2)
let number2 = parseInt(prompt('Enter the second number.'));

// Prompt user for an operation type 
let operation = prompt('Which operation would you like to perform? (add, subtract, multiply, divide) ');

// Check what operation was specified
switch (operation) {
    case 'add':
        console.log(calc.add(number1, number2));
        break;
    case 'subtract':
        console.log(calc.subtract(number1, number2));
        break;
    case 'multiply':
        console.log(calc.multiply(number1, number2));
        break;
    case 'divide':
        console.log(calc.divide(number1, number2));
        break;
    default:
        alert('You did not enter a valid operation. Give it another try.');
}