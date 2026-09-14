// ************************************************ Maths *********************************************************
console.log(Math);
// for absolute value
console.log(Math.abs(-4)); //  4
console.log(Math.abs(4)); // 4

// for roundOFF
console.log(Math.round(5.8));//6
console.log(Math.ceil(6.4)); // upper roundoff krega // 7
console.log(Math.floor(8.9)); // niche roundoff krega// 8

console.log(Math.min(5,4,2,7,8)); // 2
console.log(Math.max(5,4,2,7,8)); // 8

// for rondom values
console.log(Math.random()); //  hmesa random values dega between 0 to 1
console.log((Math.random()*10) + 1); // for sifting the values // 1 add kiya taki 0 values na aay
console.log(Math.floor(Math.random()*10) + 1)

// in csae of define min & max value
const min = 10
const max = 20
console.log(Math.random() * (max - min + 1));
console.log(Math.floor(Math.random() * (max - min + 1)));
// 10 uper ke liye
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


