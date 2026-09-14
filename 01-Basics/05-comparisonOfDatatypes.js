// when we compair different datatypes
console.log("2">1); // true because vo automatically string ko number me concert kr deag
console.log("02">1); // true

console.log(null>0); // false
console.log(null == 0);// false
console.log(null >= 0);// true
// the reason is that an equality check == and comparisons > < >= <= work differently
// comparisons convert null to a number ,treating it as 0. Thats why (3) null >= 0 is true and null>0 is false

// for strict check  ===  ye value hi nhi blki datatype ko bhi check krta hai
console.log(null === 0); // false
console.log("2" === 2); // false