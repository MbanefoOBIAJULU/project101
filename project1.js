
/*What does the following code log to the console, and why?

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