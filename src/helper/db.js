import mongoose from "mongoose";
import { Movie } from "../models/movie";
export const connectDb =async()=>{
    
  try{
    const {connection}=await mongoose.connect(process.env.MONGO_DB_URL,{
      dbName:'move',
    });
    console.log("db connected...");
    // console.log(connection);
    // const moviee=new Movie({
    //   name:"test name",
    //   cast:"Mist",
    //   director:"test",
    //   budget:2000,
    // })
    // await moviee.save();

    console.log("user is created");
  }catch(error){
    console.log("failed to connect with database");
    console.log(error);
  }
}