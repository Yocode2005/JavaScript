class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // kisi property ko accses hone se rokene ke liye static ka use krte hai
        // static propertis sirf class ke nam se hi access ki ja skti hai

        
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());

// niche se pd le
// https://chatgpt.com/share/685ce022-75ec-8006-b5cd-f915657127fb