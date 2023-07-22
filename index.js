import  express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import dbConnect from './src/config/db.js'
import restaurentRoutes from './src/routes/restaurantsRoutes.js'


dotenv.config()
dbConnect()
const app = express()

app.use(cors({
    origin: "*",
    preflightContinue: true,
  }))

app.use(express.json())

app.use('/restaurants', resturentRoutes)

app.listen(5000, () => console.log('Server is up and running at port 5000'))