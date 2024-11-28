"use client";

import React, { useState } from 'react';
import { Box, Button, Modal, TextField } from '@mui/material';

export default function AddMovieModal({ open, onClose, onAdd }) {
  const [form, setForm] = useState({ name: '', cast: '', director: '', budget: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    await onAdd(form);
    setForm({ name: '', cast: '', director: '', budget: '' });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ p: 4, backgroundColor: 'white', margin: 'auto', width: 400 }}>
        <h2>Add a New Movie</h2>
        <TextField name="name"
         label="Movie Name" 
         fullWidth margin="normal" 
         onChange={handleChange} />
         
        <TextField name="cast" label="Cast" fullWidth margin="normal" onChange={handleChange} />
        <TextField name="director" label="Director" fullWidth margin="normal" onChange={handleChange} />
        <TextField name="budget" label="Budget" type="number" fullWidth margin="normal" onChange={handleChange} />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Modal>
  );
}
