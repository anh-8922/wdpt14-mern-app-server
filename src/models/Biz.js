import mongoose, { Types } from "mongoose";

const { Schema } = mongoose;

const bizSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  image: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Biz", bizSchema);