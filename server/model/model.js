const { Password } = require('@mui/icons-material');
const { string } = require('joi');
let mongoose = require('mongoose');
let jwt = require('jsonwebtoken');
let Joi = require('joi');
let passwordComplexity = require('joi-password-complexity');

let userSchema = mongoose.Schema({
    firstName:{type:String,require:true},
    lastName:{type:String,require:true},
    email:{type:String,require:true},
    Password:{type:String,require:true},

});
let token = "kjhgfdhsre34567890lkjhgfd9876543dfg"
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this.id},token,{expiresIn:"7d"})
    return token
};

const UserModel = mongoose.model("user",userSchema);
 
let validate = (data) => {
    const schema = Joi.object({
    firstName:Joi.string().required().label("First name"),
    lastname:Joi.string().required().label("Last name"),
    email:Joi.string().required().label("Email"),
    password:Joi.string().required().label("Password"),
    })
    return schema.validate(data)
}

module.exports = {UserModel,validate}

