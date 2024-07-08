/*Write a function, evenOrOdd, that determines whether its argument is an even number. 
If it is, the function should log 'even' to the console; otherwise, it should log 'odd'.
For now, assume that the argument is always an integer.
Hint 1
A number is even if you can divide it by two with no remainder. For instance,
4 is even since 4 divided by 2 has no remainder. Conversely, 
3 is odd since 3 divided by 2 has a remainder of 1.

Hint 2
You can use the % remainder operator shown in The Basics session to determine the remainder.
*/

function evenOrOdd(number) {
   if (number % 2 === 0) {
    console.log('even');
    } 
    else {
    console.log('odd');
    }
}
evenOrOdd(100)
evenOrOdd(101)
evenOrOdd(102)
evenOrOdd(103)
/*
let number =20
console.log(number)


function evenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(number + ' is even');
    } else {
        console.log(number + ' is odd');
    }
}

// Examples:
evenOrOdd(4);  // Output: "4 is even"
evenOrOdd(3);  // Output: "3 is odd"
evenOrOdd(0);  // Output: "0 is even" (zero is even)
evenOrOdd(-1); // Output: "-1 is odd" (negative numbers can be odd or even based on their value)
*/