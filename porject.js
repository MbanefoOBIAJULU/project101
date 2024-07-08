/* Question 1
What values do the following expressions evaluate to?


false || (true && false);
true || (1 + 2);
(1 + 2) || true;
true && (1 + 2);
false && (1 + 2);
(1 + 2) && true;
(32 * 4) >= 129;
false !== !true;
true === 4;
false === (847 === '847');
false === (847 == '847');
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
|*/

console.log(false || (true && false)); //FALSE
console.log(true || (1 + 2)); //TRUE
console.log((1 + 2) || true); //any non zero number is considered as TRUE
console.log(true && (1 + 2)); //any non zero number is considered as TRUE
console.log(false && (1 + 2)); // FALSE
console.log((1 + 2) && true); // TRUE
console.log((32 * 4) >= 129); // FALSE
console.log(false !== !true); // FALSE
console.log(true === 4); // FALSE
console.log(false === (847 === '847')); // TRUE
console.log(false === (847 == '847')); // FALSE
console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);// TRUE





/*Question 2
Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer.
Hint 1
A number is even if you can divide it by two with no remainder. For instance, 4 is even since 4 divided by 2 has no remainder. Conversely, 3 is odd since 3 divided by 2 has a remainder of 1.

Hint 2
You can use the % remainder operator shown in The Basics session to determine the remainder.
*/


/*Question 3
Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.
Hint 1
You can use Number.isInteger(value) to determine whether a numeric value is an integer. It returns true if the value is an integer, false otherwise.
*/

/*Question 4
What does the following code log to the console, and why?

function barCodeScanner(serial) {
switch (serial) {
case '123':
console.log('Product1');
case '113':
console.log('Product2');
case '142':
console.log('Product3');
Default:
console.log('Product not found!');
}
}
barCodeScanner('113');
*/


/* Question 5
Refactor this statement to use an if statement instead.
return foo() ? 'bar' : git();
*/


/* Question 6
What does this code output to the console?


function isArrayEmpty(arr) {
if (arr) {
console.log('Not Empty');
} else {
console.log('Empty');
}
}
isArrayEmpty([]);*/


/*Question 7
Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string. Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.



/* Question 8
Write a function that logs whether an integer is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0.


numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
Expected Output
25 is between 0 and 50
75 is between 51 and 100
125 is greater than 100
-25 is less than 0*/



/*Question 9
Without running this code, what will it print?
console.log(false ?? null);
console.log(true ?? (1 + 2));
console.log((1 + 2) ?? true);
console.log(null ?? false);
console.log(undefined ?? (1 + 2));
console.log((1 + 2) ?? null);
console.log(null ?? undefined);
console.log(undefined ?? null);
*/


/*Question 10
Without running this code, what will it print?

function show(foo = undefined, bar = null) {
console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
}
show(5, 7);
show(0, 0);
show(4);
show();
*/




