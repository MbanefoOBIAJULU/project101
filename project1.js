/*Let's improve our previous implementation of evenOrOdd. 
Add a validation check to ensure that the argument is an integer. 
If it isn't, the function should issue an error message and return.
Hint 1
You can use Number.isInteger(value) to determine whether a numeric 
value is an integer. It returns true if the value is an integer, false otherwise.
*/

function evenOrOdd(number) {
if (!Number.isInteger(number)) {
console.log('Error: The argument is not an integer');
return;
}
if (number % 2 === 0) {
console.log(number + ' is even');
} else {
console.log(number + ' is odd');
}
}

evenOrOdd(4);       // 4 is even
evenOrOdd(3);       // 3 is odd
evenOrOdd(0);       // 0 is even
evenOrOdd(-1);      // -1 is odd
evenOrOdd(2.5);     // Error: The argument is not an integer
evenOrOdd('hello'); // Error: The argument is not an integer
