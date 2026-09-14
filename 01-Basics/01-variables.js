const accountId = 12345 // fix ho chuka hai 
let accountEmail = "yogesh@2005" // udate kr skte ho pr same scope me redeclear nhi kr skte
var accountPassword = "00987" // update or redeclere dono kr skte ho
accountCity = "jaipur"
let accountState; // undefined

// accountId = 2345 // not allowed
accountEmail  = "brijesh@2005"
accountPassword = "6784"
accountCity = "Bengaluru"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) // sabhi ko ek sath print krne ke liye table ka use kiya


