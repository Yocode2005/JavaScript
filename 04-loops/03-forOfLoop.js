// for of loop : basically used for arrays // pr strings ke liye bhi use kr skte hai

// const arr  = [1,2,3,4,5]
// for (const i of arr) {
//     console.log(i);
    
// }

// const greetings = "hello world ! "
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
    
// }


// Maps : used for unique values // duplicate values ko nhi leta hai // or jis sequence me values dete hai usssi  sequence me values milti hai // ek array method hai
// it create an new array by applying function on each function to each element
// the original arrya will remain unchanged(non-mutating)
// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United Staes of America ")
// map.set('FR',"France")
// map.set('IN',"India") // esko nhi lega
// console.log(map);

// for(const key of map){
//     console.log(key);
// }
//  // alg lene ke liye
// for(const [key , value] of map){
//     console.log(key , ' : ',value);
// }


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [i, j] of myObject) {
    console.log(i, ':-', j);
    
}


// for of loop ka ye wala syntax  objects ke liye applivable nhi hai

