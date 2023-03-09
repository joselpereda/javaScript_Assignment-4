// Global variables (best practice)
let total = 0;

// Adding private function per assignment requirements
const calculate = (x, y, operation) => {
    switch (operation) {
        case 'add':
            return x + y;
            break;
        case 'subtract':
            return x - y;
            break;
        case 'multiply':
            return x * y;
            break;
        case 'divide':
            return x / y;
            break;
        default: 
            return 0;
    }
};
//--------------------------------------------------------------
// Define the public functions
// Code for Add function
const add = (x, y) => {
    total = calculate(x, y, 'add');
    return total;
}
// Code for Subtract function
const subtract = (x, y) => {
    total = calculate(x, y, 'subtract');
    return total;
}
// Code for multiply function
const multiply = (x, y) => {
    total = calculate(x, y, 'multiply');
    return total;
}
// Code for divide function
const divide = (x, y) => {
    total = calculate(x, y, 'divide');
    return total;
}
//--------------------------------------------------------------
// Export the functions
export  {add};
export  {subtract};
export {multiply};
export {divide};