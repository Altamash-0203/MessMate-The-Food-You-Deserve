const express = require('express');
const MealsRouter = express();
const { getAllMeals } = require('../controllers/meals.controller');

const MealsModel = require('../models/meals.model');


MealsRouter.get('/meals', getAllMeals);


module.exports = MealsRouter;



