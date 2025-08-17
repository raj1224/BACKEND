import express from "express";


const app = express();

function SayHiMiddleware(req , res , next ){
console.log("Hi I am middleware👋");
next();
}

// app.use(SayHiMiddleware); // global middle ware
//  // uses when u want to use it every route


app.get("/",SayHiMiddleware ,  (req, res) => {
    res.send("Hello World"); // specific route middleware
     // this is use when we use middleware for only this routes only.
});

app.get("/users", (req, res) => {
    res.send("Users Page");
});



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


// 1. global middleware✅
// 2. specific routes middleware✅
// 3. inbuilt middleware
