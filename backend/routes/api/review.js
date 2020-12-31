const express = require('express');
const asyncHandler = require('express-async-handler');
const { Op } = require("sequelize");
const { User, Trainer, Review, Favorite  } = require('../../db/models');

const router = express.Router();

router.post('/', asyncHandler(async(req, res)=>{
    const{newReview, trainerId, userId} = req.body;
    const review = await Review.create({
        userId: Number(userId) ,
        trainerId: Number(trainerId) ,
        review: newReview.review ,
        stars: Number(newReview.stars),
        overall: Number(newReview.overall),
        knowledge: Number(newReview.knowledge),
        profesionalism: Number(newReview.prof),
        refer: Number(newReview.refer),
    })
    const trainers = await Trainer.findAll({
        include: [Review, Favorite]
    });
    
    return res.json({trainers});
}));

module.exports = router;