const tinderUser = {} // non-singleton object hai
const twitter = new Object() // ye ek singleton object hai
// dono same hi hai // object ko print krga
console.log(tinderUser);
console.log(twitter);

 const instaUser = {}
 instaUser.id = "123abc"
 instaUser.name = "yogesh"
 instaUser.isLogged = false
 console.log(instaUser);

 const regularUser = {
    email : "user@gmail.com",
    fullname : {
        username : {
            firstname : "yogesh",
            lastname : "meena"
        }
    }
 }
 console.log(regularUser.fullname);
 console.log(regularUser.fullname.username.lastname); // lastname ko access krne ke liye
 
 // combining mutiple objects : use Object.assign() method
 const obj1 = {1 : "a", 2 : "b"}
 const obj2 = {3 : "c", 4 : "d"}
//  const obj3 = Object.assign(obj1,obj2)
const obj3 = Object.assign({},obj1,obj2) // proper syntax ye hota hai baki upr wala bhi thik hi hai
 console.log(obj3);
 const obj4 = {...obj1, ...obj2} // ek or method // same as array
 console.log(obj4);


 // object ki sari keys ko access krne ke liye
 console.log(Object.keys(instaUser));
 console.log(Object.values(instaUser)); // values bhi nikal skte hai

 console.log(Object.entries(instaUser));

 console.log(instaUser.hasOwnProperty('isLogged')); // true
 