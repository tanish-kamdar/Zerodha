const {getPositions}=require('../controllers/positionsController');

const app=require('express');
const router=app.Router({mergeParams:true});

const requireAuth=require('../middleware/requireAuth');

router.get('/', requireAuth, getPositions);

module.exports=router;