import express from "express";
import {
    handleListRestaurants,
    handleAddNewRestaurant,
} from '../controllers/restaurantsControllers.js'


const router = express.Router();

router.get('/list', handleListRestaurants)
router.post('/addNewRestaurant', handleAddNewRestaurant)

export default router;