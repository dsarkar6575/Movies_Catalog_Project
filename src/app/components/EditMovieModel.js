"use client";

import React, { useState, useEffect } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';

export default function EditMovieModal({ open, onClose, movie, onEdit }) {
  const [updatedMovie, setUpdatedMovie] = useState(movie || {});

  useEffect(() => {
    if (movie) {
      setUpdatedMovie(movie); // Set initial movie details when modal opens
    }
  }, [movie]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedMovie({ ...updatedMovie, [name]: value }); // Update field dynamically
  };

  const handleSubmit = () => {
    onEdit(updatedMovie); // Call the edit function with updated movie
    onClose(); // Close the modal
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 2, maxWidth: 400, mx: 'auto', mt: '15%' }}>
        <h2>Edit Movie</h2>
        <TextField
          label="Movie Name"
          name="name"
          value={updatedMovie.name || ''}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Director"
          name="director"
          value={updatedMovie.director || ''}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Cast"
          name="cast"
          value={updatedMovie.cast || ''}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Budget"
          name="budget"
          value={updatedMovie.budget || ''}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Box>
    </Modal>
  );
}
