const express= require('express');
const router= express.Router();

const{
SponsorChild, CancelSponsorship, getMySponsoredChild, getSponsoredChild
} = require('../Controllers/sponsorController');



const {password} = require('../middleware/authMiddleware');

router.get('/:childId', SponsorChild);
router.delete('/:childId', CancelSponsorship);
router.get('/my_sponsorships', getMySponsoredChild);
router.get('/user/:userId', getSponsoredChild);


module.exports=router;