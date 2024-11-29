"use client";

import React, { useState, useEffect } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';

export default function EditMovieModal({ open, onClose, movie, onEdit }) {
  const [updatedMovie, setUpdatedMovie] = useState(movie || {});

  useEffect(() => {
    if (movie) {
      setUpdatedMovie(movie); 
    }
  }, [movie]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedMovie({ ...updatedMovie, [name]: value }); 
  };

  const handleSubmit = () => {
    onEdit(updatedMovie); 
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ p: 4, backgroundColor: 'white', margin: 'auto', width: 400 }}>
        <h2>Edit Movie</h2>
        <TextField
          label="Movie Name"
          name="name"
          value={updatedMovie.name || ''}
          onChange={handleChange}
          fullWidth margin="normal"
          
        />  
        <TextField
          label="Cast"
          name="cast"
          value={updatedMovie.cast || ''}
          onChange={handleChange}
          fullWidth margin="normal"
        />
        <TextField
          label="Director"
          name="director"
          value={updatedMovie.director || ''}
          onChange={handleChange}
          fullWidth margin="normal"
        />  
        <TextField
          label="Movie Budget (in INR)"
          name="budget"
          value={updatedMovie.budget || ''}
          onChange={handleChange}
          fullWidth margin="normal"
        />
        <Button variant="contained" fullWidth margin="normal" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Box>
    </Modal>
  );
}
