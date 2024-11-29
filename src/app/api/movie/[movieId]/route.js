import { Movie } from "@/models/movie";
import { NextResponse } from "next/server";

export async function DELETE(req,{params}){
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



export async function PUT(req, { params }) {

  const { movieId } = params; 
  const updatedMovie = await req.json(); 

  try {
    const movie = await Movie.findByIdAndUpdate(movieId, updatedMovie, { new: true });
    if (!movie) {
      return new Response(JSON.stringify({ message: 'Movie not found' }), { status: 404 });
    }
    return new Response(JSON.stringify(movie), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error updating movie' }), { status: 500 });
  }
}
