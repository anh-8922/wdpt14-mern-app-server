import express from "express";
import {
    handleListRestaurants,
    handleAddNewRestaurant,
    handleListOneResturant,
} from '../controllers/restaurantsControllers.js'


const router = express.Router();

router.get('/listall', handleListRestaurants)
router.post('/addnewrestaurant', handleAddNewRestaurant)
router.get('/listonerestaurant/:id', handleListOneResturant)

export default router;