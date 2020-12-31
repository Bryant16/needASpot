const express = require('express');
const asyncHandler = require('express-async-handler');
const { Op } = require("sequelize");
const { User, Trainer, Review, Favorite  } = require('../../db/models');

const router = express.Router();

router.get(`/users/:userid/trainer/:trainId`, asyncHandler( async(req, res)=>{
    const {userid, trainId} = req.params;
    const createFav = await Favorite.create({
        userId: Number(userid),
        trainerId: Number(trainId)
    });
    const user = await User.findAll({
        where: {id: Number(userid)},
        include: [Favorite]
      });
    const favorites = user[0].Favorites
        
        res.json({
            createFav
        })
}));


module.exports = router;