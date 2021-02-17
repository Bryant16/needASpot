const express = require('express');
const asyncHandler = require('express-async-handler');
const { Op } = require("sequelize");
const { User, Trainer, Review, Favorite  } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res)=>{
    const trainers = await Trainer.findAll({
        include: [Review, Favorite]
    });
    
    return res.json({trainers});
  }));
router.get('/:id', asyncHandler(async (req,res)=>{
    const {id} = req.params;
    const trainers = await Trainer.findByPk(id)
    const reviews = await Review.findAll({
        where:{trainerId: id}
    });

    return res.json({trainers, reviews})
}));

router.get('/trainerStyle/:type', asyncHandler(async(req, res)=>{
    const {type} = req.params
    const strength = await Trainer.findAll({
        where: {
            specialities: {
                [Op.like]: `%${type}%`
            }
        },
    })
    return res.json({strength})

}));

router.get('/reviews/:trainerId', asyncHandler(async (req, res)=>{
    const {trainerId} = req.params;
    const reviews = await Review.findAll({
        where:{
            trainerId: trainerId
        }
    })
    res.json(reviews)
}));

module.exports = router;