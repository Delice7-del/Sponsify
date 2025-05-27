const Child= require('../models/UserSchema');
const User= require('../models/UserSchema');
const connectDB = require('../config/db')

exports.getDashboardStats(async (req,res)=>{
    try{
        const totalChildren= await Child.countDocuments();
        const sponsor= await Child.countDocuments({isSponsored: true});
        const user= await User.countDocuments();
        res.json({totalChildren, sponsor, user});

    }
    catch(error){
        res.status(500).json({message: 'Server error'});
    }
});

exports.getOverview= async (req,res) =>{
    try{
        const children= await Child.find().populate('SponsoredBy', 'name email');
        res.json(children);
    }
    catch{
        res.status(500).json({message: 'Server error'});
    }
}