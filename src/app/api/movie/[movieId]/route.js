import { Movie } from "@/models/movie";
import { NextResponse } from "next/server";

export async function DELETE(request,{params}){
  const {movieId} =params;
  try {
   await Movie.deleteOne({
      _id:movieId,
    });

    return NextResponse.json({
      message:"movie deleted!!",
      success:true,
    });
  } catch (error) {
    return NextResponse.json({
      message:"Error in deleting movies!!",
      success:false,
    });
  }
  
}

export async function PUT(request,{params}){
  const {movieId}=params;
  const {name,cast,director,budget}=await request.json();

  try{
    const movie=await Movie.findById(movieId);
    movie.name=name;
    movie.cast=cast;
    movie.director=director;
    movie.budget=budget;

    const updatedMovie=await Movie.save();
    return NextResponse.json(updatedMovie);
  }catch(error){
     return NextResponse.json({
      message:"failed to update movie!!",
      success: false,
     });
  }
}