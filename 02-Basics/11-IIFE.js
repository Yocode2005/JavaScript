// Immediately Invoked Fuction Expressions (IIFE)
// GLOBAL SCOPE ke pollution ki vja se khi bar execution me problems hoti hai to unhi ko resolve krne ke liye IIFE ka use krte hai
// syntax : (esme function ko define krte hai)(executin call)

(function chai(){ // esko named IIFE bolte hai
    console.log(`DB connected`);
})();// IIFE invoke to ho jata hai pr usse pta nhi hota ki context rokna kha pr hai to invoke kren ke bad  ; lgana mt bulna 

( (name) => { // esko unnamed IIFE bolte hai
    console.log(`DB connected two ${name}`);
})(`yogesh`)