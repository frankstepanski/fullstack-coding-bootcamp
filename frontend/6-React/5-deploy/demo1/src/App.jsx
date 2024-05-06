import React, { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/views/Home/Home';
import Movies from './components/views/Movies/Movies';
import Dashboard from './components/views/Dashboard';
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import {navLinks} from "./assets/data/navLinks.js";
import API from "./services/";

import './assets/styles/reset.css';
import './assets/styles/global.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    const services =  new API('https://626adc4f6a86cd64adb45a12.mockapi.io/movies');

    setIsLoading(true);
    
    services.get()
        .then((data) => {
            setMovies(data);
            setFeaturedMovies([...data].filter(movie => movie.featured === true));
            setIsLoading(false);
        }).catch(err => {
          console.log(err);
        })
  }, []);

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

  const handleFilters = (categories) => {

    // reset movies to show all (hidden: false)
    const _movies = [...movies].map(movie => { movie.hidden = false; return movie; });
    const _categories = [];

    // convert categories to an array
    Object.entries(categories).forEach(([key, value]) => {

        if (value) {
            _categories.push(key);
        }
    });

    // If no filtered categories, send back all "reset" movies with no changes
    if (!_categories.length) { 
      setMovies(_movies); 
      return;
    }

    // hide movies that don't match the any of the selected categories (hidden = true); 
    _movies.forEach((movie) => {

      if (!movie.categories.some(category => _categories.includes(category))) {
          movie.hidden = true;
      } 
    });

    // send back the filtered movies (i.e. movies that match at least one of the selected categories)
    setMovies(_movies);
  }

  return (

    <div className="container">
      <Header links = {navLinks} />
      <main>
        <Routes>
            <Route index element={<Home movies={featuredMovies} isLoading={isLoading} />} />
            <Route path='movies' element={<Movies movies={movies} handleFilters = {handleFilters} addReview={addReview} isLoading={isLoading} />} />
            <Route path='dashboard' element={<Dashboard />} />   
        </Routes>
      </main>
      <Footer />
    </div>

  );
}

export default App;