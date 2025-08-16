const crypto = require("crypto")

// 1. randomBytes
const randomvalues = crypto.randomBytes(100);

console.log(randomvalues.toString("hex"))

// ! programs runs always on ram.


// 2. createHash

const hashvalue = crypto.createHash("sha256").update("Suraj").digest("hex")
console.log(hashvalue);

// const inputValue = "Suraj"
// const matchValue = crypto.createHash("sha256").update(inputValue).digest("hex")


// if(hashvalue === matchValue){
//     console.log("you can login")
// }
// else{
//     console.log("Something went wrong")
// }

// *encryption and decryption Assignment read about them.

