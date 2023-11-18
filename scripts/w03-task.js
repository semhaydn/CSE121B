/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

// Function Definition
function add(num1, num2) {
    return num1 + num2;
}

// Function Call
function addNumber(){
    // Read Input
    const num1 = Number(document.getElementById("add1").value);
    const num2 = Number(document.getElementById("add2").value);

    // Calculate Sum
    const sum = add(num1, num2);

    // Output Sum
    document.getElementById("sum").value = sum;
}

// Add Event Listener
document.getElementById("addNumbers").addEventListener("click", addNumber);


/* Function Expression - Subtract Numbers */
function subtract(num1, num2) {
    return num1 - num2;
}

// Function Call
function subtractNumber(){
    // Read Input
    const num1 = Number(document.getElementById("subtract1").value);
    const num2 = Number(document.getElementById("subtract2").value);

    // Calculate difference
    const difference = subtract(num1, num2);

    // Output difference
    document.getElementById("difference").value = difference;
}

// Add Event Listener
document.getElementById("subtractNumbers").addEventListener("click", subtractNumber);


/* Arrow Function - Multiply Numbers */

function multiply(num1, num2) {
    return num1 * num2;
}

// Function Call
function multiplyNumbers(){
    // Read Input
    const num1 = Number(document.getElementById("factor1").value);
    const num2 = Number(document.getElementById("factor2").value);

    // Calculate Product
    const product = multiply(num1, num2);

    // Output Product
    document.getElementById("product").value = product;
}

// Add Event Listener
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);



/* Open Function Use - Divide Numbers */

function divide(num1, num2) {
    return num1 / num2;
}

// Function Call
function divideNumbers(){
    // Read Input
    const num1 = Number(document.getElementById("dividend").value);
    const num2 = Number(document.getElementById("divisor").value);

    // Calculate Quotient
    const quotient = divide(num1, num2);

    // Output Quotient
    document.getElementById("quotient").value = quotient;
}

// Add Event Listener
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */
// Add Event Listener
document.getElementById("getTotal").addEventListener("click", getTotalDue);

function getTotalDue() {
    // Read Subtotal
    let subtotal = Number(document.getElementById("subtotal").value);

    // Check Membership
    let isMember = document.getElementById("member").checked;

    // Apply Discount
    if (isMember) {
        subtotal *= 0.80; // Apply 20% discount
    }

    // Output Total
    document.getElementById("total").textContent = `$ ${subtotal.toFixed(2)}`;
}

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
// Declare and instantiate an array variable to hold the numbers 1 through 13.
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

// Assign the value of the array variable to the HTML element with an ID of array.
document.getElementById("array").textContent = numbersArray.join(', ');

/* Output Odds Only Array */
// Use the filter() array method to find all of the odd numbers of the array variable
let odds = numbersArray.filter(number => number % 2 !== 0);
document.getElementById("odds").textContent = odds.join(', ');

/* Output Evens Only Array */
// Use the filter() array method to find all of the even numbers of the array variable
let evens = numbersArray.filter(number => number % 2 === 0);
document.getElementById("evens").textContent = evens.join(', ');

/* Output Sum of Org. Array */
// Use the reduce() array method to sum the array variable elements
let sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.getElementById("sumOfArray").textContent = sumOfArray;

/* Output Multiplied by 2 Array */
// Use the map() array method to multiple each element in the array variable by 2
let multiplied = numbersArray.map(number => number * 2);
document.getElementById("multiplied").textContent = multiplied.join(', ');

/* Output Sum of Multiplied by 2 Array */
// Use the reduce() array method to sum the elements of the multiplied array
let sumOfMultiplied = multiplied.reduce((sum, number) => sum + number, 0);
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;