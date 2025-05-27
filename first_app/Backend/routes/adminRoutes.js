const express= require('express');
const router= express.Router();

const {getDashboardStats, getOverview} = require('../Controllers/adminController');


const {protect, admin} = require('../middleware/authMiddleware.js');


router.get('/', protect,admin, getDashboardStats);
router.get('/', protect,ElementInternals,getOverview);



module.exports= router;