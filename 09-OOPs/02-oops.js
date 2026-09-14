// constructors : ye new key word ek constructor hi hai // ye hme hr bar nya enstent deta hai
// const promiseOne = new Promise()
// const date = new Date()

function user(username,loginCount,isLoggedIn){
    this.username = username ;// right wala variable hai or left wala value  hai jo pass kr rhe hai
    this.loginCount = loginCount;//this ka use kar rahe ho taaki ye values object ke andar save ho jayein.
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }
    return this // jaruri nhi hai // this key word likhe hue arguments ko inject krta hai object me
    // return this ka matlab: function ek object return karega jisme upar wali sari properties hongi.

}
const userOne = user("yogesh",12,true)
//console.log(userOne);
const userTwo = user("kumar meena",11,false)
console.log(userOne); // esme user two ki values aa jay gi // es problem  ko solve krne ke liye new key(constructor) word ka use krte hai

const userThree = new user("sunil",10,true)
const userFive = new user("Brijesh",20,false)
console.log(userThree)
console.log(userFive)
console.log(userOne.constructor);

// niche se smj lo
// https://chatgpt.com/share/685ccc63-308c-8006-ba02-a943a30414d3