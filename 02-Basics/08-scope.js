// scope : {}
let a = 300
{
    let a = 10
    const b = 20
    var c = 30
console.log("inside scope : ",a);
}
console.log("outside scope : ",a);
//console.log(b); // glt hai
console.log(c);

// let & const are block scope
// var are global scope


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);// ye glt hai because eska scope khtm ho gya hai
    // children  function parent ke variables ko aceess kr skte hai

    two()
}

one()