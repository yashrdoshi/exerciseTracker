const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username : {type:String,requried:true},
    description : {type:String,requried:true},
    duration : {type:Number,requried:true},
    date : {type:Date,requried:true},
},{
    timestamps:true
});

module.exports = mongoose.model('Exercise',exerciseSchema)