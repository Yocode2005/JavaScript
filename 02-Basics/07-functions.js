
function calculateCartPrice(val1,val2,...num1){// ...(rest operator khte hai) eski bja se tino ko print kr pay,agr nhi krte to fir 200 print hota
    return num1
}
console.log(calculateCartPrice(200, 400, 500,1000,300))// 200 ->val1, 400 ->val2, baki ->num1


// passing object to function
const user ={
    username : "hitesh",
    price : 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
// or ese bhi kr skte hai
function newObject(getobject){
    console.log(`username is ${getobject.username} and price is ${getobject.price}`);
}
newObject({
    username : "yogesh",
    price : 200
})

// array bhi pass kiya ja skta hai
const myarray = [200,300,400,500]
function returnSecValue(getarray){
    return getarray[1]
}
// console.log(returnSecValue(myarray));
console.log(returnSecValue([200,300,400,500]))

