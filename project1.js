/*Write a function that takes a string as
 an argument and returns an all-caps version 
 of the string when the string is longer than 
 10 characters. Otherwise, it should return the 
 original string. Example: change 'hello world' 
 to 'HELLO WORLD', but don't change 'goodbye'.*/

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

/*function convertString(str) {
    if (str.length > 10) {
        return str.toUpperCase();
    } else {
        return str;
    }
}

// Testing the function
console.log(convertString('hello world')); // Outputs: 'HELLO WORLD'
console.log(convertString('goodbye')); // Outputs: 'goodbye'
*/