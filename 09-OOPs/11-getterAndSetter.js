class user {
    constructor(email,password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this.newemail.toUpperCase()
    }
    set email(value){
         this.newemail  = value 
    }

    get password(){ // password ke liye getter set kiya
        return this.newpassword.toUpperCase()
    }
    set password(value){
        this.newpassword = value
    }
    
}
const hitesh = new user("h@hitesh.ai","abc")
console.log(hitesh.password);
console.log(hitesh.email)

// in case apn ne koi call bnai or nme define ki gyi proprtires ak access aap sb ko nhi dena cahte  to ussi ke liye  getters or settrs  use aate hai 
