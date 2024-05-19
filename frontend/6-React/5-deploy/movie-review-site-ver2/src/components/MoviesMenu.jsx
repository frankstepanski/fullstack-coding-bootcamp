import Filters from './Filters'
import Pagination from './Pagination';
import styles from "./MoviesMenu.module.css";

const MoviesMenu = ({
                        handleFilters,
                        moviesPerPage,
                        paginate,
                        totalMovies,    
                    }) => {

    return (

        <div className={styles.moviesMenu}>
            <Filters handleFilters = {handleFilters} totalMovies={totalMovies} />
            <Pagination 
                moviesPerPage = {moviesPerPage}
                paginate = {paginate}
                totalMovies = {totalMovies} 
            />
        </div>
    );
}

export default MoviesMenu;