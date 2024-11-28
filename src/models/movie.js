import mongoose, {Schema} from "mongoose";
const MovieSchema=new Schema(
  {
    name:String,
    cast:String,
    director:String,
    budget:Number,
  }
);

export const Movie=mongoose.models.movie || mongoose.model("movie",MovieSchema);
