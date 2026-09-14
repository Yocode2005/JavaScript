const user = {
    username : "yogesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to the website`);
        // this : used for current context
        console.log(this); // user  ka accsess de rha hai es time na ki username(yogesh) ka a
        // agr arrow function me use krte to username ko indicate krta because tb global scope ke context me bat hoti
    }
}

user.welcomeMessage()

user.username = "sunil"

user.welcomeMessage()

// console.log(this); // {} dega