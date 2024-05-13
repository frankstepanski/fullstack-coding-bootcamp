import React, { useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout'
import Home from './components/pages/Home';
import Movies from './components/pages/Movies';
import NowPlaying from './components/pages/NowPlaying';
import STORE from "./assets/data/STORE";
import './App.css';

function App() {
  const [movies, setMovies] = useState(STORE);
  
  const featuredMovies = movies.filter(movie => movie.featured === true);

  const addReview = (id, rating, comment) => {
   
    const _movies = [...movies];
    const index = _movies.findIndex(movie => movie.id === id);  

    _movies[index].reviews.push({
        user: `user${Math.floor(Math.random() * 99) + 1}`,
        stars: parseInt(rating),
        comment: comment,
        date: new Date().toISOString(),
    });
    setMovies(_movies);
  }

  return (

    <PublicLayout>
        <Routes>
            <Route index element={<Home movies={featuredMovies} />} />
            <Route path='movies' element={<Movies movies={movies} addReview={addReview} />} /> 
            <Route path='now-playing' element={<NowPlaying />} />
        </Routes>
    </PublicLayout>

  );
}

export default App;