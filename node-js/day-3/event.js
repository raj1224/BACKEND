const EventEmitter = require("events")

const emitter  = new EventEmitter()

// ! why we use new keyword a lot read about it.

// key methods
// * on(eventName,listner)---create
// * emit(eventName,[args])---execute
emitter.on("GREET" , (args)=>{
    console.log(`Hello World ${args.username} and the id is ${args.id}`)
})

emitter.emit("GREET" ,{
    username:"Suraj",
    id:"10asldhasildh9021873nlkasc"
})