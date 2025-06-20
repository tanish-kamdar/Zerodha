const {Schema}=require('mongoose');


const OrderSchema=new Schema({
    product: String,
    name: String,
    qty: Number,
    price: Number,
});

module.exports=OrderSchema;