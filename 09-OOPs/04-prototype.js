 // let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
// kud ki property define ke skte hai  //object ko  denge to  ye sb ke pass chli jay gi
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}


Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}
heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh() // array ke pass bhi hai
// heroPower.heyHitesh() // ye erroe dega //  kyu ki ye array nhi hai

// inheritance : mtlb kese kisi or ki properties ko access or use kr skte hai

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // properties assign krne ke liye
}

Teacher.__proto__ = User // ab teacher bhi user ki properties ko use kr skta hai

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)// teacher ki sari propertie ko teachingsupport access kr skta hai

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()

// niche se pd le 
// https://chatgpt.com/share/685cd798-adc4-8006-9897-b20ab10e97d0