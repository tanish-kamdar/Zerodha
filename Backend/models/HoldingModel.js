const {model}=require('mongoose');
const HoldingSchema=require('../schemas/HoldingSchema');

const HoldingModel=model('holding',HoldingSchema);

module.exports=HoldingModel;