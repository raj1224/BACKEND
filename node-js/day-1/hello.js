const {AddFunc , SubFunc} = require("./math")

console.log("Hello world i am node-js")
// / ques :- nodejs kese identify krta h ki konsa version h aapke laptop ka
// ans :- window object me ek navigator object hota h
// aur usme userAgent property hoti h
// usme browser ka version hota h

// nodejs me window/alert/etc object nahi hota vo bs browser me hota h.

// console.log(window) ---> works in browsers only
// console.log(alert)  ---> works in browsers only

// how to start nodejs:-
// npm init -y

console.log("The value of my module is" , AddFunc(12 , 34) + " and " + SubFunc(5,2))
