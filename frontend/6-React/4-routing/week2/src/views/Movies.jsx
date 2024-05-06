import React, {useState} from 'react'
import MovieList from '../components/MovieList';
   
const Movies = ({movies, addReview}) => {
  const [filters, setFilters] = useState({})

    return (
        <>      
        <div className="movies-filter">
            <h3> Filter by: </h3>
            <label>
                <input type="checkbox" value="action" name="catories" /> Action
            </label>
            <label>
                <input type="checkbox" value="adventure" name="catories"  /> Adventure
            </label>
            <label>
                <input type="checkbox" value="comedy" name="catories" /> Comedy
            </label>
            <label>
                <input type="checkbox" value="drama" name="catories"  /> Drama
            </label>
            <label>
                <input type="checkbox" value="fantasy" name="catories"  /> Fantasy
            </label>
            <label>
                <input type="checkbox" value="thriller" name="catories"  /> Thriller
            </label>
        </div>
          
            <div className="movies-list-container">
                <MovieList movies={movies} addReview={addReview} />
            </div>
        </>
    )
}

export default Movies;