// *********************************************Numbers*********************************************

const score = 400 // yha surety nhi hai ki ye  esak datatype numbe hi hai
console.log(score);

//datatype ko specified krna ho to new key word use krte hai
const balance  = new Number(100) // ab pkka hai ki esak datatype number hi hai
console.log(balance);
console.log(typeof balance); // object
console.log(typeof 100); // number

console.log(balance.toString()); // ab string bn gya hai
console.log(balance.toString().length); // 3
console.log(balance.toFixed(2));  // 100.00


const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4)); // 123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString(en-IN)); // atq indian :  10,00,000

