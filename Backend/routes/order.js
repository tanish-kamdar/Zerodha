const {placeOrder}=require('../controllers/orderController');

const app=require('express');
const router=app.Router({mergeParams:true});

const requireAuth=require('../middleware/requireAuth');

router.post('/', requireAuth, placeOrder);

module.exports=router;