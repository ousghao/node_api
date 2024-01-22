const express = require('express')
const router = express.Router();

const mongoose = require('mongoose');

const {getUsers,getUserbyId,updateUser,deletebyId,createUser} = require('../controllers/userController')



const User = require('../models/userModel')

router.post('/',createUser)
router.get('/',getUsers)
router.get('/:id',getUserbyId)
router.put('/:id',updateUser)
router.delete('/:id',deletebyId)

module.exports = router;
