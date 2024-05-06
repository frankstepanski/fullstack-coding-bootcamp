import React from "react";
import MovieList from '../MovieList';
import styles from "./Movies.module.css";

const Movies = ({
    movies,
    addReview, 
}) => {

    return (
        <div className={styles.movies}>      
            <div className={styles.moviesListContainer}>
                {
                     <MovieList movies={movies} addReview={addReview} />
                }
            </div>
        </div>
    )
}

export default Movies;