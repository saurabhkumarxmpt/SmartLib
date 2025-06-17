require('dotenv').config();
const express=require('express');
const cors=require('cors');
const PORT=process.env.PORT;
const database=require('./config/database');
const authRoute=require('./routes/authRoutes');
const app=express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true              
}));

database();

app.use('/auth',authRoute);

app.get('/',(req,res)=>{
    res.json({messgae:'this is home'});
});

app.listen(PORT,(err)=>{
        if(err){
            console.error(err.message);
        }else{
            console.info('server is run');
        }
})
