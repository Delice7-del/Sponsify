const express= require('express');
const { getAllChildren,getChildById,AddChild,updateChild,deleteChild,sponsorChild,getAvailableChild} = require('../Controllers/childController');
const router= express.Router();

router.get('/', getAllChildren);
router.get('/:id', getChildById);
router.put('/:id', updateChild);
router.delete('/:id', deleteChild);
router.get('/available', getAvailableChild);
router.get('/sponsored', sponsorChild);
router.post('/', AddChild);


module.exports= router;