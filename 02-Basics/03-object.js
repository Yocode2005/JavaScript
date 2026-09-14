// singleton : apne tarike ka ek hi  object hai

// object literals
// symbol datatype ko object me [] me use krte hai
// bina [] ke bhi use kr skte pr uska datatype symbol nhi rhega
const mySym = Symbol("sign1")
const fakeSym = Symbol("signature")
const jsUser = {
    name : "yogesh",
    fakeSym : "signature2",
    [mySym] : "sign2", // acces of an symbol datatype
    age : 20,
    location : "Jaipur",
    email : "yogesh@google.com",
    isLogged : false,
    lastLoginDay : ["monday","saturday"],
    "full name" : "yogesh kumar meena",
}
// access ko values of object keys
console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["full name"]) // dot wale se nhi kr payenge access
console.log(typeof jsUser.fakeSym) // string
console.log(jsUser[mySym]);
// for updating the  key values 
jsUser.email = "yogesh@chatgpt.com"
console.log(jsUser["email"]);
// object ko freez krne ke liye // freez krne ke bad usme changes nhi kr skte hai
// Object.freeze(jsUser)
// jsUser.email = "yogesh@microsoft.com" // update  nhi hoga
// console.log(jsUser);


jsUser.greeting  = function(){
    console.log("hello everyone");
}
jsUser.greetingTwo  = function(){
    console.log(`Hello Everyone my name is ${this.name}`); // name ko refer krne ke liye
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());





