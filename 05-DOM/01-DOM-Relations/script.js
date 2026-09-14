document.getElementById("title") //  element ko access krne ke liye with the help of its id
document.getElementById("title").id // title
document.getElementById("title").class// undefine
document.getElementById("title").className// heading
//*********************************************************************************************************** */

document.getElementById("title").getAttribute('id') // title
document.getElementById("title").getAttribute('class') // heading
document.getElementById("title").setAttribute('class','testingClass') // ab class class se testingClass ho gyi hai// ye overright krta hai chijo ko
document.getElementById("title").setAttribute('class','newClass heading') // ab newClass or heading dono  class hai
//************************************************************************************************************ */

document.getElementById('title')
const title = document.getElementById('title')
title.style.backgroundColor = "green";
title.style.padding = "15px";
//************************************************************************************************************** */

console.log(title.textContent); // ye sara ka  sara text dega chaiye vo visible ho ha na ho
console.log(title.innerHTML);// ye text me likhe hue html code ko bhi deta dega
console.log(title.innerText); // ye sirf visible content ko hi dega
//******************************************************************************************************** */

console.log(document.querySelector("h2")) // first h2 tag ko dega
console.log(document.querySelector(".heading"))
console.log(document.querySelector('input[type ="password"]'));
//********************************************************************************************** *****/

const myUl = document.querySelector('ul');
console.log(myUl);
console.log(myUl.querySelector('li'));
const turnGreen = myUl.querySelector('li')
turnGreen.style.backgroundColor = "green"
turnGreen.style.padding = "10px"
turnGreen.innerText = "one se kr do kuch or"
//**************************************************************************************************************/

console.log(document.querySelectorAll('li')); // nodelist milega//forEach dikha to arraye smja kya // pure array nhi hota hai
const tempLiList = document.querySelectorAll('li');
console.log(tempLiList);

//tempLiList.style.color = "green" // error dega because ye ek nodlist milt a hai jo ki array jesa hia but array nhi hai // to change kis element me krne  hai vi btana pdega 

tempLiList[0].style.color = 'orange'
tempLiList.forEach(function (l) {
    l.style.fontFamily = "cursive"
})
//************************************************************************************************************/

console.log(document.getElementsByClassName('list-item')) // html collection milta hai // ye bhi array nhi hota hai
const tempClassList  = document.getElementsByClassName('list-item');
console.log(tempClassList)
// html collection pr loop lgane ke liye array me convert krna pdega
const myConvertedArray = Array.from(tempClassList)
console.log(myConvertedArray); // jo dega vo hoga ek array

myConvertedArray.forEach(function(li){
    li.style.color = "rosybrown"
})
