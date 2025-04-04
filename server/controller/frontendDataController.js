let userModel = require('../model/frontendDataModel.js');

let createData = async(req,res)=>{
    let data = new userModel(req.body);
    console.log("data",data)
    await data.save();
    res.send({success:true,messag:"successfully created data",data:data})
}

let readData = async(req,res)=>{
    let data = await userModel.find({});
    res.send({success:true,message:"successfully reading the data",data:data})
}

let updateData = async(req,res)=>{
    let id = req.params.id;
    console.log(id);
    console.log("updating");
}

let deleteData =async(req,res)=>{
    let id = req.params.id;
    let data = await userModel.findByIdAndDelete(id)
    console.log("deleting");
}
module.exports = {createData,readData,updateData,deleteData};
