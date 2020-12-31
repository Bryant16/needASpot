const express = require('express');
const asyncHandler = require('express-async-handler');
const { Op } = require("sequelize");
const { User, Trainer, Review, Favorite  } = require('../../db/models');

const router = express.Router();

router.post('/', asyncHandler(async(req, res)=>{
    const{newReview} = req.body;
    console.log('this is the review',newReview)

}));

module.exports = router;