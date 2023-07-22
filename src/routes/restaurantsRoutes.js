import express from "express";
import {
    handleListRestaurants,
} from '..controllers/resturentControllers.js'


const router = express.Router();

router.get('list', handleListRestaurants)

export default router;