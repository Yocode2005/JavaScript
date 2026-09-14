// Dates

let myDate = new Date()
console.log(myDate); //2025-10-10T14:02:53.391Z
console.log(myDate.toString());//Fri Oct 10 2025 19:32:53 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//Fri Oct 10 2025
console.log(myDate.toLocaleString()); // 10/10/2025, 7:32:53 pm
console.log(myDate.toISOString()); //2025-10-10T14:02:53.391Z
console.log(myDate.toJSON());// 2025-10-10T14:02:53.391Z

console.log(typeof myDate); // object

// koi specific date decalre krni ho
let myCreateDate = new Date(2025, 0 , 21) // JS  me months 0 se strart hote hai
console.log(myCreateDate); // 2025-01-20T18:30:00.000Z date ka number alg alg prototypes ki vja se vri krega
console.log(myCreateDate.toDateString()); //Tue Jan 21 2025

let ekordate = new Date(2023, 0, 23, 5, 3)
console.log(ekordate.toLocaleString());

ekorFormate = new Date("2023-01-14")
console.log(ekorFormate.toLocaleString());
// formate : mm/dd/yy
anotherFormate = new Date("01-14-2023")
console.log(anotherFormate.toLocaleString());

// TimeStamps // 
let myTimeStamp = Date.now()
console.log(myTimeStamp); // in mili seconds (jo date mdn doc pr dekh rkhai  1/01/1970 vha se lekr aaj tk ka time)
console.log(myCreateDate.getTime());


console.log(Date.now()); // current date dega in mili sec.
console.log(Date.now()/1000); // to convert into seconds 
console.log(Math.floor(Date.now()/1000));  // decimals  ko avoid kren ko


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());// EK PICHE KA DEGA because 0 se stat hota hai
console.log(newDate.getMonth() + 1); // ab shi daga

newDate.toLocaleString('default',{
    weekday: "long",
    month: "long"
})






