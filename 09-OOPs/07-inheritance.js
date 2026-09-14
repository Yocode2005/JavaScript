class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{ // extends User — iska matlab Teacher class ko User class ki properties and methods milenge.
    constructor(username, email, password){
        super(username) // super : jis class ko extend kr rhe the uske andr jay ga or uske constructor ke andr jay ga or sari properties ko access krega
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User); // instanceof ka matlab: check karo kya chai object User class ka bhi instance hai?

// niche se pd le 
// https://chatgpt.com/share/685cdea6-738c-8006-92a8-9e73cfd1d34c