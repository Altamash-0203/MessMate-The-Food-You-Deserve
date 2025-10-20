const express = require('express');
const app = express();
const MealsModel = require('../models/meals.model');

const getAllMeals = (req, res) => {
    try {
        res.status(200).json({ message: 'Meals route is working fine' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllMeals
}




