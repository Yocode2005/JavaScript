// their are two types of memory location : 
// stack(used for promitive datatypes) , esme copy milti hai dataype ki
// Heap(used for non-primitive datatypes) , esme reference milta hai dataype ka

let myYoutubename = "youtube"
let anothername = "chaiaurcode"
anothername  =  "pta nhi"

// console.log( myYoutubename);
// console.log(anothername)
let experi = myYoutubename
experi = "instagram"
console.log( myYoutubename);
console.log(experi)
// primitive datatype => stack memory location => esme copy milti hai dataype ki => original me kuch change nhi hot hai


let user = {
    email : "user@gamil.com",
    upi : "user@ybl"
}

let anotheruser = user
anotheruser.email = "chutiya@gmail.com"
console.log(user.email);
console.log(anotheruser.email);
// non-primitive datatype => heap memory location => esme refrenece milta hai dataype ka => original me  change  hot hai

