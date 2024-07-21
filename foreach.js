/*let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(function(name) {
  console.log(name);
});

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
names.forEach(name=>console.log(name));

function doubler(number) {
    console.log(number);
  
    if (number <= 50) {
      doubler(number * 2);
    }
  }
  
  doubler(5); // => 5
              // => 10
              // => 20
              // => 40
              // => 80
              
  
function funcA() {
console.log("Start funcA");
funcB();
console.log("End funcA");
}
            
function funcB() {
console.log("Start funcB");
funcC();
console.log("End funcB");
}
            
function funcC() {
console.log("Start funcC");
console.log("End funcC");
}
            
funcA();
            

let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter = counter + 1;
}

let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter++;
}*/


let names = ['Emeka', 'Obi', 'Ify', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']

