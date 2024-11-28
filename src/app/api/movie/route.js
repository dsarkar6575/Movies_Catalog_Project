import { connectDb } from "@/helper/db";
import { Movie } from "@/models/movie";
import { NextResponse } from "next/server";
connectDb();
export async function GET(){
   let movie=[];
   try{
    movie=await Movie.find();
   }catch(error){
    console.log(error);
    return NextResponse.json({
       message:"failed to get movies",
       success:false,
    });
   }
  return NextResponse.json(movie);
}


export async function POST(request){
   const {name,cast,director,budget}=await request.json();

   console.log({name,cast,director,budget});

   const movie=new Movie({
    name,
    cast,
    director,
    budget,
   });
  try{


    const createMovie=await movie.save();

  const response=NextResponse.json(movie,{
    status:201,
  });
  return response;


  }catch(error){
    console.log(error);
    return NextResponse.json({
      message:"failed to create movie!!",
      status:false,
    })
  }
}


export function DELETE(request){
  console.log("delete api called");
  return NextResponse.json({
    message:"deleted !!",
    status:true,
  },
  {status:201, statusText:"hey changed text"});
}

export function PUT(){
  
}