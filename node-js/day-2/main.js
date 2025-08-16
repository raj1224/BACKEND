// console.log(global);
// console.log(Object.getOwnPropertyNames(global));

// SETTIMEOUT
// setTimeout(()=>{

//     console.log("hello i am from global")
// },2000)

// SETINTERVEL
// let count = 0;

// const interval = setInterval(()=>{
//     console.log(`Interval Count: ${++count}` )

//     if(count===4){
//         clearInterval(interval)
//     }
// },1000)

const fs = require("fs")

console.log(__dirname , __filename)

fs.writeFile("write.txt" , "Hello world this is suraj" , (err,res )=>{
    if(err){
        console.log(err)
    }
})





// console.log("Hello")
// let suraj = "oidwehfiowe" // top level code 


function n(){

}//function top level code h pr func ke andr ki chije nhi h.

