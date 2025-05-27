const Child= require('../models/childSchema');
const connectDB = require('../config/db');
exports.SponsorChild = async (req,res) =>{
    try{
        const child= await Child.findById(req.params.childId);
        if(!child){
            return res.status(404).json({message: 'Child not found'});

        }
       if(child.isSponsored){
        return res.status(400).json({message: 'Child is already sponsored'});
       }
    }
    catch(error){

    res.status(500).json({message: 'Server error'});
    }
}

exports.CancelSponsorship = async (req,res) =>{
    try{
        const child= await Child.findById(req.params.childId);
        if(!child){
            return res.status(404).json({message: 'Child not found'});
        }
        if(!child.isSponsored || String(child.SponsoredBy) !== String(req.user._id)){
      return res.status(403).json({message: 'You are not authorized to cancel this sponsorship'});
        }
        is.Sponsored= false;
        SponsoredBy= null;
        await child.save();
        res.status(200).json({message: 'Sponsorship cancelled'});
    }
    catch(error){
        res.status(500).json({message: 'Server error'});
    }
}

exports.getMySponsoredChildren = async (req,res) =>{
    try{
        const child= await Child.find({SponsoredBy : req.params._user.id});
        res.status(201).json(child);
    }
    catch(error){
        res.status(500).json({message: 'Server error'});
    }
}

exports.getSponsoredChildren = async (req,res) =>{
    try{
        const child= await Child.find({SponsoredBy: req.params.userId});
        res.status(201).json(child);
    }
    catch(error){
        res.status(500).json({message: 'server error'});
        
    }
}