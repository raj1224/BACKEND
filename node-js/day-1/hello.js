const {AddFunc , SubFunc} = require("./math")
// ya math require krte to math.addfunc or math.subfunc likhna padta.

// ? js works only in browser

console.log("Hello world i am node-js")
// / ques :- nodejs kese identify krta h ki konsa version h aapke laptop ka
// ans :- window object me ek navigator object hota h
// aur usme userAgent property hoti h
// usme browser ka version hota h

// ! nodejs/bun/deno js runtime environment h

// !node likhke terminal me enter krne se nodejs ka REPL environment khulta h

// ? window object kya hota h


// nodejs me window/alert/etc object nahi hota vo bs browser me hota h.


// !how to start nodejs:- it is a industry standard to use npm init -y

// use scripts for node shortcuts

// console.log(window) ---> works in browsers only
// console.log(alert)  ---> works in browsers only

console.log("The value of my module is" , AddFunc(12 , 34) + " and " + SubFunc(5,2))
