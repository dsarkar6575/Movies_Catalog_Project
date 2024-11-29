"use client";
import React, { useState,useEffect} from 'react';
import { Container, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import EditMovieModal from './EditMovieModel';
import AddMovieModal from './AddMovieModal';

export default function Main(){
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);



  const fetchMovies = async () => {
    try {
      console.log('Fetching movies...');
      const res = await fetch('/api/movie');
      console.log('Response status:', res.status);
      const data = await res.json();
      setMovies(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const addMovie = async (movie) => {
    await fetch('/api/movie', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movie),
    });
    fetchMovies();
  };

  const editMovie = async (updatedMovie) => {
    try {
      const response = await fetch(`/api/movie/${updatedMovie._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedMovie),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update the movie');
      }
  
     
      fetchMovies();
    } catch (error) {
      console.error('Error editing movie:', error);
    }
  };
  
  

  
  const deleteMovie = async (movieId) => {
    try {
      const response = await fetch(`/api/movie/${movieId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete the movie');
      }
  
      fetchMovies();
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };
  
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    
    <Container>
      <h1>Movie Catalog</h1>
      <br/>
      <Button  sx={{ position: 'absolute', top: 78, right: 25 }} variant="contained" onClick={() => setIsModalOpen(true)}>
        Add a New Movie
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Cast</TableCell>
            <TableCell>Director</TableCell>
            <TableCell>Movie Budget (in INR)</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((movie) => (
            <TableRow key={movie._id}>
              <TableCell>{movie.name}</TableCell>
              <TableCell>{movie.cast}</TableCell>
              <TableCell>{movie.director}</TableCell>
              <TableCell>{movie.budget}</TableCell>
              <TableCell>
             
              <Button size="small" onClick={() => { setSelectedMovie(movie); setIsModalEdit(true); }}> Edit</Button>
              <Button color="error" size="small" onClick={() => deleteMovie(movie._id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddMovieModal open={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={addMovie} />
      <EditMovieModal open={isModalEdit} onClose={() => setIsModalEdit(false)} movie={selectedMovie} onEdit={editMovie}/>

    </Container>
  );
}