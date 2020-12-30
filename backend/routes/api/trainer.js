const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Trainer, Review  } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res)=>{
    const trainers = await Trainer.findAll({
        include: [Review]
    });
    
    return res.json(trainers);
  }));

router.get('/reviews/:trainerId', asyncHandler(async (req, res)=>{
    const {trainerId} = req.params;
    console.log(trainerId, 'TRAINER ID IS HERE')
    const reviews = await Review.findAll({
        where:{
            trainerId: trainerId
        }
    })
    res.json(reviews)
}));

module.exports = router;