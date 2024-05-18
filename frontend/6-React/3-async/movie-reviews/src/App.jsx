import React, {useState} from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import "./App.css";

import {STORE} from "./assets/data/STORE.js";

/*
    Using https://cloudinary.com/ for online image storage
*/

export default function App() {
  const [movies, setMovies] = useState(STORE);

  const addReview = (movieID, review) => {

    // Create a new array of movies
    const newMovies = [...movies];
    // Find the movie by id (the review is for a particular movie)
    const index = newMovies.findIndex(movie => movie.id === movieID)
    // Then add the review to the movie's reviews array
    newMovies[index].reviews.push(review);
    setMovies(newMovies);

  }

  return (
    <div className="container">
          <Header />
          <MovieList movies = {movies} addReview = {addReview} />
    </div>
  );
}
