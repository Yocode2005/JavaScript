// for-Each loop :  used for arrays

 const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val); // val array ki hr value ki index value ko acess krega
// } )

// console.log('\n');


// arrow function ki form me bhi use kr skte hai callback function ko
// coding.forEach( (item) => {
//     console.log(item);
// } )

// console.log('\n');

// printMe function ko bhi use kr skte hai
// function printMe(item){
//     console.log(item);
// }
//  coding.forEach(printMe)

//  console.log('\n');


//  coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

// console.log('\n');

// objects pr bhi lgaya ja skta hai
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )



