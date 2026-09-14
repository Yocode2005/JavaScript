let score = 56
let newScore = "90abc"

console.log(typeof 56); // number
console.log(typeof(score));// number
console.log(typeof "90");// string

let valueInNumber = Number(newScore); // string ko number me convert kr dega
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN, but eska type number hi hai

// "90" => 90
// "90abc" => NaN
// true => 1; false => 0

let isLogged = 1;
let BooleanIsLogged = Boolean(isLogged);
console.log(BooleanIsLogged) // true

// 1 => true
// "" => false
// "yogesh" = true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);// string