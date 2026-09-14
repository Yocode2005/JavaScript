//  how to create an promise

// const promiseOne = new Promise(function(resolve,reject){
//     // do an async task
//     // DB calls , cryptgraphy,network
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve() // for connecting the resolve  methid with .then 
//     } ,1000)
// })

// // for consumption of an promise
// promiseOne.then(function(){
//     console.log('promise is consumed');
// })
//********************************************************************************************************** */

// new Promise(function(resolve,reject){ // promise  ko create kiya
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve() // resolve() method ko .then() se connect kiya // agr connect nhi kiya hota to 2nd console nhi chlta
//     },1000)
// }).then(function(){ // promise ko consume kiya
//     console.log('Async 2 resolved');
// })
//************************************************************************************************************ */

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username : 'yogesh',email : 'yogesh@example.com',age : 20}) // resolve me kuch bhi pass kr skte hai
//     },1000)
// })
// promiseThree.then(function(user){ // resolve me jo bhi perameter pass krenege vo yha mil jata hai
//     console.log(user);
// })

//************************************************************************************************************ */

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if (!error){
//             resolve({username : 'yogesh',password : '123'})
//         }else{
//             reject('Error : something went wrong')
//         }
//     },1000)
// })
// promiseFour.then((user) => { // using arrow function
//     console.log(user);
//     return user.username
// }).then((myusername) => { // jo value uper wale then se aay gi vo hi pass hogi // ese chaining khte hai
//     console.log(myusername)
// }).catch(function(errorBolLe){ // for reject() method
//     console.log(errorBolLe);
// }).finally(() => { // promise resolve ho ya fir reject ye to chlega hi
//     console.log('the promise is either resolved or rejected')
// })
//************************************************************************************************************* */

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if (!error){
//             resolve({username : 'javascript',password : '123'})
//         }else{
//             reject('Error : something went wrong i java-script')
//         }
//     },1000)
// })
// async function consumePromiseFive(){
//    try {
//      const response = await promiseFive
//     console.log(response);
//    } catch (error) {
//     console.log(error);
//    }
// }
// consumePromiseFive();
//************************************************************************************************************* */

// async function getAllUsers(){
//    try {
//      const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data =  await response.json() // json me convet kren me time lgega to usse bhi await krna hoga
//     console.log(data);
//    } catch (error) {
//     console.log('E: ',error);
//    }
// }
// getAllUsers()

// or

// fetch('https://jsonplaceholder.typicode.com/users') // eska retun type ek promise dega
// .then((response) => {
//     return response.json()
// })
// .then((data) => { // response.json() ko handel krne ke liye
//     console.log(data)
// })
// .catch((error) => {
//     console.log(error)
// })

// niche wale link se smj skte ho
//https://chatgpt.com/share/685cc62d-19a4-8006-bcc0-4c47c9c92fb0

