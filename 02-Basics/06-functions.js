function sayMyName(){
    console.log("y")
    console.log("o")
    console.log("g")
    console.log("s")
    console.log("h")
}
sayMyName() // execution

function addTwonumbers (number1,number2){ // values passed in defination are terms as perameters
    console.log(number1 + number2)
}
addTwonumbers(3,4) // vales pass at a time of calling of function is termed as arguments
addTwonumbers(3,"4")
const result = addTwonumbers(3,5)
console.log("result : " ,result) // undefined because return ka use nhi kiya hai //****** */

function newfunction(str1,str2){
    // let print  = str1 + str2
    // return print
    return str1 + str2
    console.log("sunil"); // return ke bad kuch nhi chlta hai
}
const print = newfunction(5,5)
console.log("print : ",print)


function loginUser(username){
    return `${username} just logged in`
}
console.log(loginUser("hitesh"))
console.log(loginUser()) // undefined just logged in // because define nhi kiya hai

