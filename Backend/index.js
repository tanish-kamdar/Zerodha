const express=require('express');
const app=express();
require('dotenv').config();
const PORT=process.env.PORT || 3001;
const mongoose=require('mongoose');
const url=process.env.MONGO_URL;
const OrderModel = require('./models/OrderModel');
const PositionModel = require('./models/PositionModel');
const HoldingModel = require('./models/HoldingModel');
const bodyParser=require('body-parser');
const cors=require('cors');
const userRoute=require('./routes/user');
const cookieParser=require('cookie-parser');
const morgan=require('morgan');
const verifyToken = require('./middleware/verifyToken');

app.use(cors({
        origin : 'http://localhost:5173',
        credentials : true,
}));
app.use(bodyParser.json());
app.use(cookieParser(process.env.SECRET));
app.use(morgan('dev'))
app.get('/holdings',verifyToken, async (req,res)=>{
       
        let holdings=await HoldingModel.find();
        res.send(holdings);
});

app.get('/positions',verifyToken,async (req,res)=>{
        console.log(req.user);
        let positions=await PositionModel.find();
        res.send(positions);
});
app.post('/order',verifyToken,async (req,res)=>{
        let order=new OrderModel(req.body);
        await order.save();

        let holding=await HoldingModel.findOne({name:order.name});
        
        if(order.mode==="BUY"){
                if(!holding){
                        await HoldingModel.insertOne({
                                name:order.name,
                                qty: order.qty,
                                avg: order.price,
                                net : "+0.00%",
                                day: "+0.00%"
                        });
                }else{
                        let newQty=holding.qty+order.qty;
                        
                        await HoldingModel.updateOne({name:holding.name},{
                                qty: newQty,
                                avg: parseFloat(((holding.qty*holding.avg+order.qty*order.price)/(holding.qty+order.qty)).toFixed(2))
                        });
                }

        }else if(order.mode==="SELL"){
                if(!holding) return;

                let newQty=holding.qty-order.qty;

                if(newQty===0){
                        await HoldingModel.deleteOne({name:holding.name});
                        return;
                }else{
                        await HoldingModel.updateOne({name:holding.name},{
                                qty: newQty
                        });
                }
        }
});

app.get('/holdings/:uid/qty',async (req,res)=>{
        let uid=req.params.uid;
        let qty=await HoldingModel.find({name : uid});
        res.send(qty);
});

//User Routes
app.use("/user",userRoute);


app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
    mongoose.connect(url);
    console.log(`Database Connection Established.`);
});