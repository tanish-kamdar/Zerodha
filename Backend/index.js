const express=require('express');
const app=express();
require('dotenv').config();
const PORT=process.env.PORT || 3001;
const mongoose=require('mongoose');
const url=process.env.MONGO_URL;



app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
    mongoose.connect(url);
    console.log(`Database Connection Established.`);
});