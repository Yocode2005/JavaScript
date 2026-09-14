function setUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username,email,password){
    setUsername.call(this,username) // call ke sath reference ko bhi hold krna hai esliye call  ka use kiya hai
    // call, current context kisi or function ko pass kr deta hai
    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@fb.com","123")
console.log(chai);

// niche se pd lo
// https://chatgpt.com/share/685cd972-8158-8006-82ee-2ab194ab0e58