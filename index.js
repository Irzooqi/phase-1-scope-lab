
// Declare a variable in global scope called `customerName` using the `var` keyword and assign it the value `'bob'`
var customerName = 'bob';

// Write a function that accesses that global `customerName` variable, and uppercases it
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Write a function that declares a variable called bestCustomer in the global scope
function setBestCustomer() {
   bestCustomer = 'not bob';
}

// Write a function that changes the value of the bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant in the global scope
const leastFavoriteCustomer = 'John';

// Attempt to change the value of the constant
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Jane'; // This will result in an error
}
