const express= require('express');
const router= express.Router();

const{
    registerUser,loginUser, getAllUser,updateUserProfile,deleteUser,getUserProfile
}= require('../Controllers/userController');

const{protect,email}= require('../middleware/authMiddleware');

router.get('/register', registerUser);
router.get('/login', loginUser);

router.get('/profile', getUserProfile);
router.put('/profile', updateUserProfile);

router.get('/', getAllUser);
router.delete('/:id', deleteUser);


module.exports= router;


















module.exports=router;