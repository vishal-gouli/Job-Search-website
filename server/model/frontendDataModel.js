const { Tune } = require('@mui/icons-material');
const { string, number } = require('joi');
let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    education:{
        type:String,
        require:true
    },
    collage:{
        type:String,
        require:true
    },
})

let userModel = mongoose.model('frontendData',userSchema);

module.exports = userModel;