/*Refactor this statement to use an if statement instead.
//return foo() ? 'bar' : git();
if (foo()) {
    return "bar";
} else {
return (git); 
}


function down(){ 
if (foo())
    return 'bar';
else{
    return git();
}
}
console.log(down());


/*function foo() {
    // This function returns a boolean value
    return true;  // or false
}

function git() {
    // This function returns a string
    return 'git result';
}

function example() {
    if (foo()) {
        return 'bar';
    } else {
        return git();
    }
}

)Testing the function
console.log(example()); // Outputs: 'bar' if foo() returns true, 'git result' if foo() returns false
*/ 

function example(foo) {
    if (foo) {
console.log('bar');
    } else 
     {
console.log('git');
    }
}
example()

// Testing the function
//console.log(example());


//What does this code output to the console?

/*
function isArrayEmpty(arr) {
if (arr) {
console.log('Not Empty');
} else {
console.log('Empty');
}
}
isArrayEmpty([]);*/