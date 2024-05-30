import React from 'react';
import Movie from "./Movie";

const MovieList = ({movies, addReview}) => {

    return (
        <section>
            {
                movies.map ((movie, index) => {
                  return (
                    <Movie key = {index} movie = {movie} addReview = {addReview}/>
                  );
                })  
            }
        </section>
    );
}

export default MovieList;