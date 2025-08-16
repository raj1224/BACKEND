// const fs = require('fs');

// setTimeout(() => {
//     console.log('hello from settimout');
    
// }, 0);

// setImmediate(()=>{
//     console.log('hello from setImmediate');
// },0)

// console.log('hello from global');

// OUTPUT:-
// hello from global
// hello from settimout
// hello from setImmediate

// !EXCEPTIONAL CASE
// setTimeout(() => {
//     console.log('hello from settimout');
    
// }, 0);

// setImmediate(()=>{
//     console.log('hello from setImmediate');
// },0)

// OUTPUT:-
// hello from setImmediate
// hello from settimout

//! THREAD POOL TASK

let start = Date.now();
const crypto = require('crypto');
//? crypto is a cpu intensive task usko cpu offload krdeta h thread pool ko
// thread pool me bydefault 4 worker hote h.

// process.env.UV_THREADPOOL_SIZE=5
// process.env.UV_THREADPOOL_SIZE = require('os').cpus().length; // Set this first!


crypto.pbkdf2('password-1','salt1',100000, 1024,'sha512',()=>{
    console.log(`${Date.now()-start}ms Done`);
})
crypto.pbkdf2('password-1','salt1',100000, 1024,'sha512',()=>{
    console.log(`${Date.now()-start}ms Done`);
})
crypto.pbkdf2('password-1','salt1',100000, 1024,'sha512',()=>{
    console.log(`${Date.now()-start}ms Done`);
})
crypto.pbkdf2('password-1','salt1',100000, 1024,'sha512',()=>{
    console.log(`${Date.now()-start}ms Done`);
})
crypto.pbkdf2('password-1','salt1',100000, 1024,'sha512',()=>{
    console.log(`${Date.now()-start}ms Done`);
})
crypto.pbkdf2('password-1','salt1',100000, 1024,'sha512',()=>{
    console.log(`${Date.now()-start}ms Done`);
})
crypto.pbkdf2('password-1','salt1',100000, 1024,'sha512',()=>{
    console.log(`${Date.now()-start}ms Done`);
})
crypto.pbkdf2('password-1','salt1',100000, 1024,'sha512',()=>{
    console.log(`${Date.now()-start}ms Done`);
})
crypto.pbkdf2('password-1','salt1',100000, 1024,'sha512',()=>{
    console.log(`${Date.now()-start}ms Done`);
})
crypto.pbkdf2('password-1','salt1',100000, 1024,'sha512',()=>{
    console.log(`${Date.now()-start}ms Done`);
})

// ! hume code me jyada cpu intensive task ni krne h

// ? we can increase out thread pool size by using this

// process.env.UV_THREADPOOL_SIZE = require('os').cpus().length; // Set this first!

// const crypto = require("crypto"); // Import after setting UV_THREADPOOL_SIZE
// let start = Date.now();

// crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
//   console.log(`${Date.now() - start}ms Done`);
// });

// crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
//   console.log(`${Date.now() - start}ms Done`);
// });

// crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
//   console.log(`${Date.now() - start}ms Done`);
// });

// crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
//   console.log(`${Date.now() - start}ms Done`);
// });

// crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
//   console.log(`${Date.now() - start}ms Done`);
// });


// console.log('UV_THREADPOOL_SIZE:', process.env.UV_THREADPOOL_SIZE);