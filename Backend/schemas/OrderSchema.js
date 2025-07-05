const {Schema}=require('mongoose');


const OrderSchema=new Schema({
    mode: String,
    name: String,
    qty: Number,
    price: Number,
});

module.exports=OrderSchema;