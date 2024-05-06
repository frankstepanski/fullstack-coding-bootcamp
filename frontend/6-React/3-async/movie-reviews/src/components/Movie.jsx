import React from 'react';
import {calcMovieRating} from "../util";
import ReviewForm from './ReviewForm';
import ReviewList from "./ReviewList";

const Movie = ({movie, addReview}) => {

  const categoryList = movie.categories.map((category,index) => <li key = {index}>{category}</li>);

  const rating = calcMovieRating(movie.reviews);

    return (
        <article key = {movie.id}>
            <h3>{movie.title} - {movie.year}</h3> 
            <header>
              <img className = "thumbnail" src = {movie.imgSrc} alt = {movie.title} />
              <div className = "details">
                  <p>{movie.synopsis}</p>
                  <h4>Rating: {rating}</h4>
                  <div className = "categories">
                    <h4>Categories:</h4>
                    <ul>{categoryList}</ul> 
                  </div>
              </div>
            </header> 
            <aside>
               <ReviewList reviews = {movie.reviews}/>
               <ReviewForm movieID = {movie.id} addReview = {addReview}/>
           </aside>
        </article>
    );
}

export default Movie;