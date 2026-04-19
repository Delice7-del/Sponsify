const express= require('express');
const router= express.Router();

const{
    registerUser,loginUser, getAllUsers,updateUserProfile,deleteUser,getUserProfile
}= require('../Controllers/userController');

const{protect}= require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/profile', getUserProfile);
router.put('/profile', updateUserProfile);

router.get('/', getAllUsers);
router.delete('/:id', deleteUser);


module.exports= router;


















module.exports=router;