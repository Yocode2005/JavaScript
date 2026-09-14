//   function addLanguage(langName){
//         const str = document.createElement('li');
//         str.innerHTML = `${langName}`
//         document.querySelector('.language').appendChild(str) // attach kren ke liye
//     }
//     addLanguage("python");
//     addLanguage("typescript");

/************************************************************************************************************* */

    // // thoda optimize trika
    // function addOptiLanguage(langName){
    //     const str = document.createElement('li');
    //     str.appendChild(document.createTextNode(langName))
    //     document.querySelector('.language').appendChild(str)
    // }
    // addOptiLanguage('golang')
//*************************************************************************************************************** */
    
    // //Edit
    const secondLang = document.querySelector("li:nth-child(2)")
    console.log(secondLang);
    //secondLang.innerHTML = "Mojo"
    const newstr = document.createElement('li')
    newstr.textContent = "Mojo";
    secondLang.replaceWith(newstr);
//************************************************************************************************************** */
    // //edit
    // const firstLang = document.querySelector("li:first-child")
    // firstLang.outerHTML = '<li>TypeScript</li>'
    // document.querySelector('.language').appendChild(firstLang)
    /********************************************************************************************************** */

    //remove
    // const lastLang = document.querySelector('li:last-child')
    // lastLang.remove()

