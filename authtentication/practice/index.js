import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import session from 'express-session';
import userRoutes from './routes/user.route.js'


dotenv.config()

const app = express();
app.use(express.json())

// Session config
app.use(
    session({
        secret:process.env.SESSION_SECRET,
        resave:false,
        saveUninitialized:true,
        cookie:{maxAge:600000} // 10 minutes
    })
)
const PORT = process.env.PORT || 5000;

// *Routes
app.get('/',(req,res)=>{
    res.send('hello')
})
app.use('/api/user',userRoutes)

connectDB()
.then(()=>{
    app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`);
})
}).catch((error)=>{
    console.error("error connecting to the database",error.message);
})

