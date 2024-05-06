import React, { useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Movies from './components/pages/Movies';
import NowPlaying from './components/pages/NowPlaying';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import {navLinks} from './assets/data/navLinks';
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
    });

    setMovies(_movies);
  }

  return (

    <div className="container">
      <Header links = {navLinks} />
      <main>
        <Routes>
            <Route index element={<Home movies={featuredMovies} />} />
            <Route path='movies' element={<Movies movies={movies} addReview={addReview} />} /> 
            <Route path='now-playing' element={<NowPlaying />} />
        </Routes>
      </main>
      <Footer />
    </div>

  );
}

export default App;