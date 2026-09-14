// array
const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4,5,6,7)
console.log(myArr[0]);

// array methods 

myArr.push(6) // jo value pass kroge vo last me add kr dega // [0,1,2,3,4,5,6]
console.log(myArr);
myArr.pop() // array ke last element ko remove kr dega [0,1,2,3,4,5]
console.log(myArr);

myArr2.unshift(0) // starting me  0 add kr dega // [0,1,2,3,4,5,6,7]
console.log(myArr2);
myArr2.shift() // starting element ko htta dega // [1,2,3,4,5,6,7]
console.log(myArr2);

console.log(myArr2.includes(9));// false // 9 include hai ki nhi
console.log(myArr2.indexOf(6)); // 5
console.log(myArr2.indexOf(9)); // -1 // because exist hi nhi krta hai array me

const newArr = myArr.join// datatype bdl deta hai
console.log(myArr);
console.log(newArr); 
console.log(typeof newArr);

// slice : return the section of array
console.log("A",myArr2);
const myn1 = myArr2.slice(2,4)

console.log(myn1);
console.log("B",myArr2);
// splice : 
const myn2 = myArr2.splice(2,4)
console.log(myn2);

