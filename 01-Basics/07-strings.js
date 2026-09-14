const name = "yogesh"
const age  = 19

// console.log("yogesh " + 19 + " year old "); purana tarika hai

// we can use template leterals
console.log(`hello my name is ${name} and i am ${age} years old ` )

const gameName = new String('yogeshhh')

console.log(gameName[0]); // y


 console.log(gameName._proto_);  // undefined
console.log(gameName.length); // length prototype is used to find th length of string
console.log(gameName.toUpperCase()); // to uppercase the string
console.log(gameName.charAt(3)); //  kis index pr konsa character  hai
console.log(gameName.indexOf('e'));   // character ki position/index pta krne ke liye 

const newString = gameName.substring(0,4) // last value excluded hoti hai
console.log(newString);

const anotherString = gameName.slice(-8,4) // -ve me ulta chlta hai
console.log(anotherString);

const str = "    sunil meena   "
console.log(str);
console.log(str.trim()); // aagr ,piche ke spaces ko hta dega

const url = "https://yogesh.com/yogesh%20meena"
console.log(url);
console.log(url.replace('%20','-')); // %20 ko replace kr dega - se

console.log(url.includes("meena")); // true

const  newName = "brijesh-kumar-meena"
console.log(newName.split('-')); // ek array bna kr de dega means string ko array me converrt kr dega

 

