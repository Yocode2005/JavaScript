// object literals

const user = {
    username : "yogesh",
    loginCount : 8,
    signedIn : true,
    getUserDetails : function(){
       // console.log("got the user detail from database");
       console.log(`username : ${this.username}`); // this uss object ko point krega  jis object ke through function call hua hai
       console.log(this.username);
       
       
    }
}
// console.log(user.username);
 //console.log(user.getUserDetails());
 console.log(this); // {} because abhi global context me kuch nhi hai


// niche se smj le
// https://chatgpt.com/share/685cc98c-b5ec-8006-80af-d9f17f8c93c2