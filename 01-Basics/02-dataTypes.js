"use strict"; // treat all js code a newer version


let name = "yogesh" // string
let age  = 19 // number
let isFollow = true // boolean
let city; // undefinrd


// number => 2 to power 53
// bigInt =>for large interger values
// string => ""
// boolean => true/false
// null => stand alone value // empty value
// undefined => variable to declare kr diya pr usse koi value nhi di
// symbol => unique

// object
console.log(typeof "yogesh");
console.log(typeof 19);
console.log(typeof undefined);
console.log(typeof null); // object datatype hai



// primitive datatypes : 7
// string ,  number , boolean , symbol , bigInt , null , undefined
const score  = 100
const scoreValue = 100.3

const isLogged  = false
const outsideTemp = null
let useremail;

const id  = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid); // false

const bigNumber = 2345688906478995678n


// reference (non promitive)
// array , objects , functions

const heroes = ["shaktiman" , "naagraj" , "doga"];

let myObj = { // {} me object hai jise myObj me store kr rkha hai
    name : "yogesh",
    age : 19,
}

const myFunction  = function(){
    console.log("ye ek function nam ka function hai jo myFunction me store hai")
}
console.log(myFunction);
myFunction();
