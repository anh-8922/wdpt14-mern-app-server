import mongoose from "mongoose";

const {Schema} = mongoose

const restaurantSchema = new Schema ({
    restaurantname: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required:true
    },
    postcode:{
        type: String,
        required:true
    },
    city:{
        type: String,
        required:true
    },
    openningtime: {
        type: String,
        required:true
    },
    longitude: {
        type: String,
        // required:true    
    },
    latitude: {
        type: String,
        // required:true 
    },
    image:String,
    cuisine:[{
        name:{
            type: String,
            required: true
        },
        price:{
            type: String,
            required: true
        }
    }]
})

export default mongoose.model("Restaurant", restaurantSchema)