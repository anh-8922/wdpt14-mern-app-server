import mongoose, { Types } from "mongoose";

const { Schema } = mongoose;

const restaurantSchema = new Schema ({
  restaurantname: {
      type: String,
      required: true,
  },
  description: {
      type: String,
      required:true
  },
  openningtime: {
      type: String,
      required:true
  },
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