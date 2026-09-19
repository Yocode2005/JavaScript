const textBtn = document.getElementById("bt");
const test = new Promise(function(resolve, rejet){
    console.log("pending");

    textBtn.addEventListener("click",(e) => {
        resolve();
        console.log("resolved");
    })
})