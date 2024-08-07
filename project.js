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
console.log((1 + 2) || true); //TRUE
console.log(true && (1 + 2)); //TRUE
console.log(false && (1 + 2)); // FALSE
console.log((1 + 2) && true); // TRUE
console.log((32 * 4) >= 129); // FALSE
console.log(false !== !true); // FALSE
console.log(true === 4); // FALSE
console.log(false === (847 === '847')); // TRUE
console.log(false === (847 == '847')); // FALSE
console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);// TRUE



/*Question 2
Write a function, evenOrOdd, that determines whether its argument is an even number. 
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

 
/*Question 3
Let's improve our previous implementation of evenOrOdd. 
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
    
    evenOrOdd(100);       // 100 is even
    evenOrOdd(101);       // 101 is odd
    evenOrOdd(102);       // 102 is even
    evenOrOdd(103);      // 103 is odd
    evenOrOdd(2.5);     // Error: The argument is not an integer
    evenOrOdd('hello'); // Error: The argument is not an integer
    
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
barCodeScanner('113');*/

function barCodeScanner(serial) {
switch (serial) {
case '123':
console.log('Product1');
case '113':
console.log('Product2');
case '142':
console.log('Product3');
default:
console.log('Product not found!');
}
}
barCodeScanner('113');
/* the following code logs the following to the console
'Project2' 'Project3' and 'product not found'; 
The switch statement checks for the value of serial
aginst the arguments labelled case.
once a match is found, it logs it to the console but continues 
to the next case label since there is no break statement after each case. 
*/


/* Question 5
Refactor this statement to use an if statement instead.
return foo() ? 'bar' : git();
*/

function example(foo) {
if (foo) {
console.log('bar');
} else 
{
console.log('git');
}
}
example(true)
example()


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


function isArrayEmpty(arr) {
if (arr) {
console.log('Not Empty');
} else {
console.log('Empty');
}
}
isArrayEmpty([]); // NOT EMPTY


/*Question 7
Write a function that takes a string as an argument 
and returns an all-caps version of the string when 
the string is longer than 10 characters. Otherwise, 
it should return the original string. Example:
 change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.*/


 function allCaps(word) {
if (word.length > 10) {
return word.toUpperCase()
} else{
    return word
}
}
console.log(allCaps('hello world'))
console.log(allCaps('goodbye'))
console.log(allCaps('hello'))


/* Question 8
Write a function that logs whether an integer is 
between 0 and 50 (inclusive), between 51 and 100
 (inclusive), greater than 100, or less than 0.*/

 function numberRange(num) {
    if (num >= 0 && num <= 50) {
        console.log('The number is between 0 and 50 (inclusive)');
    } else if (num >= 51 && num <= 100) {
        console.log('The number is between 51 and 100 (inclusive)');
    } else if (num > 100) {
        console.log('The number is greater than 100');
    } else {
        console.log('The number is less than 0');
    }
}
numberRange(25);   // 25 is between 0 and 50 
numberRange(75);   // 75 is between 51 and 100 
numberRange(125);  // 125 is greater than 100
numberRange(-25);  // -25 is less than 0




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

/*The ?? operator a nullish coalescing operator. 
It returns the right-hand operand when the left-hand operand is null 
or undefined; otherwise, it returns the left-hand operand.
*/
console.log(false ?? null);  //false
console.log(true ?? (1 + 2));  // true
console.log((1 + 2) ?? true);  //3
console.log(null ?? false);  //false
console.log(undefined ?? (1 + 2)); // 3
console.log((1 + 2) ?? null);   // 3
console.log(null ?? undefined);  //undefined
console.log(undefined ?? null);  // null.


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

function show(foo = undefined, bar = null) {
    console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
    }
    show(5, 7); // foo is 5, bar is 7
    show(0, 0); //foo is 0, bar is 0
    show(4);  // foo is 4, bar is 42 
    show();  // foo is 3, bar is 42




