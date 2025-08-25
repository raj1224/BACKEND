// global imports
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

// internal imports  
import authRoutes from './routes/auth.route.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json())

// connect mongodb
mongoose.connect(process.env.MONGO_URI).then(()=>console.log('Mongodb connected'))
.catch((err)=>console.log('Mongodb connection err:',err.message))

// Routes
app.use('/auth', authRoutes)

app.listen(PORT,()=>{
    console.log(`server is listning at http://localhost:${PORT}`);
    
})


// authentication routes (Signup and login)
// private routes ( jwt (authentication))