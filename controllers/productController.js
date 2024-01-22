const Product = require("../models/productModel");
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler')




const createProducts = asyncHandler(async (req,res)=>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product);


    } catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

const getProducts = asyncHandler(async (req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json(products);

    } catch(error){
        res.status(500)
        throw new Error(error.message)
        
    }
})

const getbyId = asyncHandler(async (req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch(error){
        res.status(500)
        throw new Error(error.message)
        
    }
})

const updatebyID = asyncHandler(async (req,res)=>{
    try{
        const {id}= req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        //we cant find the product with the id
        if(!product){
            res.status(404).json({message:`cannot find any product with id: ${id}`})
        }
        else{
            const updated = await Product.findById(id);
            res.status(200).json(updated);
        }
    }catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

const deletebyId = asyncHandler(async (req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            res.status(404).json({message:`cannot find the product by id: ${id}`})
        }
        else{
            res.status(200).json({message:`the product is deleted`})
        }
    } catch(error){
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports = {
    getProducts,
    createProducts,
    getbyId,
    updatebyID,
    deletebyId

}