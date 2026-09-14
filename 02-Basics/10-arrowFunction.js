function chai(){
    let username = "yogesh"
    console.log(this.username); // undefined // mtlb ye sirf object me hi work krta hai
    console.log(this);
}
chai()

// another method to declare functions


// const chai = function chai(){
//     let username = "yogesh"
//     console.log(this.username); // undefined // mtlb ye sirf object me hi work krta hai
// }
// chai()

//***************************************************arrow function *********************************************************************** */
const arrowFunction = () => {
    let nam = "sunil"
    console.log(this.nam); // undefined 
    console.log(this); // {}
}
arrowFunction()


// syntax of arrow function : () => {}

    const addTwo  = (num1,num2) => {
        return num1 + num2
    }
console.log(addTwo(5,6));

// jb ek hi line of code ho to ye bhi kr skye hai
const jod = (num3,num4) => num3 + num4
// jb {} ka use nhi krte tb return likhna jaruri nhi hai or jb {} ka use kre tb retun ka use krna must hai
console.log(jod(5,5));

// oject ko retun krna

const baki = () => ({email : "yogesh@123"}) // object ko retun krne ke liye {} krna hai
console.log(baki())

