const {getHoldings, getIndividualHoldingQty}=require('../controllers/holdingsController');

const app=require('express');
const router=app.Router({mergeParams:true});

const requireAuth=require('../middleware/requireAuth');

router.get('/:uid/qty', requireAuth, getIndividualHoldingQty);
router.get('/', requireAuth, getHoldings);

module.exports=router;