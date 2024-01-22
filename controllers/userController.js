
const mongoose=require('mongoose')
const User = require('../models/userModel')


const createUser = async (req,res)=>{
    try{
    const user = await User.create(req.body)
    res.status(200).json(user);
} catch(error){
        res.status(500).json(error);
    }
    

}


const getUsers = async (req,res)=>{
    try{
    const users = await User.find({})
    if(!users){
        res.status(404).json({message:`pas de users`})
    }
    res.status(200).json(users);
} catch(error){
        res.status(500).json(error);
    }
    

}

const getUserbyId = async (req,res)=>{
    try{
    const {id}=req.params;
    const user = await User.findById(id)
    if(!user){
        res.status(404).json({message:`pas de users`})
    }
    res.status(200).json(user);
} catch(error){
        res.status(500).json(error);
    }
}

const updateUser = async (req,res)=>{
    try{
    const {id}=req.params;
    const user = await User.findByIdAndUpdate(id)
    if(!user){
        res.status(404).json({message:`pas de users`})
    }
    const updated = req.body
    res.status(200).json(updated);
} catch(error){
        res.status(500).json(error);
    }
}

const deletebyId = async (req,res)=>{
    try{
    const {id}=req.params;
    const user = await User.findByIdAndDelete(id)
    if(!user){
        res.status(404).json({message:`pas de users by this id: ${id}`})
    }
    res.status(200).json({message:`c est supprimer`});
} catch(error){
        res.status(500).json(error);
    }
}




module.exports = {
    getUsers,
    getUserbyId,
    updateUser,
    deletebyId,
    createUser
}