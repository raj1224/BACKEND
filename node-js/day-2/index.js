// Create a server
// const http = require('http');
// const PORT = 3000; //! Kbhi bhi apne port ko dikhate ni h hum use enviromental enviroment me rakhte h.

// // Create an HTTP server
// const server = http.createServer((req, res) => {
//   console.log(req);

//   // Send response body
//   res.end('Hello, World!');
// });

// // Listen on port 3000
// server.listen(PORT, () => {
//   console.log('Server running at http://localhost:3000/');
// });

// ! code ko jitna kb synchronous likhenge utna hi fast chalega.

// ASSIGNMENT :- CREATING LOG FILE USING FS 

const http = require('http');
const fs = require('fs');
const PORT = 3000; 

const server = http.createServer((req, res) => {

  const log = `${Date.now()}: & from ${req.url} New request received \n`;

  fs.appendFile('log.txt',log,(err)=>{
    if(err){
      console.log('Error writing to the log file:', err);
      res.statusCode=500;
      res.end('internal server Error')
      return;
    }
    res.end('hello world from server')
  })
});
server.listen(PORT, () => {
  console.log('Server running at http://localhost:3000/');
});

// const fs = require("fs");
// const crypto = require("crypto");



// const start = Date.now();

// // Log with setImmediate
// setImmediate(() => console.log("Hello from setImmediate"));

// // Asynchronous file read
// fs.readFile("sample.txt", "utf-8", () => {
//   console.log("IO polling");

//   // Timers within the I/O callback
//   setTimeout(() => {
//     console.log("hello from timer 2");
//   }, 0);

//   setTimeout(() => {
//     console.log("hello from timer 3");
//   }, 5 * 1000);

//   // Another setImmediate
//   setImmediate(() => console.log("Hello from setImmediate 2"));

//   // CPU-intensive cryptographic tasks processed sequentially
//   const tasks = Array.from({ length: 6 }, (_, i) => `password${i + 1}`);
//   tasks.forEach((password, index) => {
//     crypto.pbkdf2(password, "salt1", 100000, 1024, "sha512", () => {
//       console.log(`${Date.now() - start}ms`, `${password} Done`);
//     });
//   });
// });

// // Timer with 0ms delay
// setTimeout(() => console.log("Hello from timer 1"), 0);

// // Log from top-level synchronous code
// console.log("Hello from top level code");
