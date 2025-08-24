import express from 'express';
import connectDB from './config/db.js';
import userRoute from './routes/user.route.js'

const PORT= 3000;
const app = express();

// connect to DB
app.use(express.json());
connectDB();
app.use('/api/',userRoute)

app.get('/',(req,res)=>{
    res.send('hello world')
});
app.listen(PORT,()=>{
    console.log('Server is up');
    
})

// express, mongodb, mongoose