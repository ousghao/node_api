const express = require('express')
const router = express.Router();

const mongoose = require('mongoose');

const Product = require('../models/productModel')

const {getProducts,createProducts,getbyId,updatebyID,deletebyId} = require('../controllers/productController')

//routes

router.post('/',createProducts)

router.get('/',getProducts)

router.get('/:id', getbyId)

router.put('/:id',updatebyID)

router.delete('/:id',deletebyId)

module.exports = router;