"use client";
import React, { useState, useEffect } from 'react';

export default function EditMovieModel({ movieId }) {
  const [formData, setFormData] = useState({
    name: '',
    cast: '',
    director: '',
    budget: '',
  });

  // Fetch movie details to prefill the form
  useEffect(() => {
    fetch(`/api/movie/${movieId}`)
      .then((res) => res.json())
      .then((data) => setFormData(data))
      .catch((err) => console.error('Failed to fetch movie details:', err));
  }, [movieId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/movie/${movieId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Movie updated successfully!');
      } else {
        alert(`Failed to update movie: ${result.message}`);
      }
    } catch (error) {
      console.error('Error updating movie:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Movie Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Cast:</label>
        <input
          type="text"
          name="cast"
          value={formData.cast}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Director:</label>
        <input
          type="text"
          name="director"
          value={formData.director}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Budget:</label>
        <input
          type="number"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Update Movie</button>
    </form>
  );
}


