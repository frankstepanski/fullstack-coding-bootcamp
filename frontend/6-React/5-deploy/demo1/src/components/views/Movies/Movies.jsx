import Filters from '../../container/Filters/Filters'
import MovieList from '../../presentational/MovieList/MovieList';
import styles from "./Movies.module.css";

const Movies = ({isLoading, handleFilters, movies, addReview}) => {

    return (
        <>      
            <Filters handleFilters = {handleFilters} />

            <div className={styles.moviesListContainer}>
                {
                    !isLoading ? <MovieList movies={movies} addReview={addReview} />
                    : <p>Loading...</p>
                }
            </div>
        </>
    )
}

export default Movies;