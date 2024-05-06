import React, { useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Movies from './views/Movies';
import Dashboard from './views/Dashboard';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {navLinks} from "./assets/data/navLinks";
import STORE from "./assets/data/STORE";

import './assets/styles/reset.css';
import './assets/styles/global.css';

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
            <Route path='dashboard' element={<Dashboard />} />   
        </Routes>
      </main>
      <Footer />
    </div>

  );
}

export default App;