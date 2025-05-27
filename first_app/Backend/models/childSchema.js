const mongoose= require('mongoose');
const connection = require('../config/db')

const childSchema = new mongoose.Schema({
    name: String,
    age: String,
    story: String,
    image: String,
    isSponsored: {type: Boolean, default: true},
    SponsoredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' ,default: null}
})

const User= mongoose.model('Children', childSchema);
module.exports= User;

