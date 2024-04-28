/*
 * Three different locations to store images:
 *   - public folder
 *   - src/assets folder
 *   - on the server
 *  
 *  https://www.upbeatcode.com/react/where-to-store-images-in-react-app/
 *
 */

const Home = ({store}) => {

    return (

        <main>
            <section className="jumbotron">
                <h1>Welcome to the Movie Reviewer Database</h1>
                <p>Comment and rate your favorite movies as well as add your own movies to the database.</p>
                <p>Fun for the whole family. 🍿 </p>
            </section>

            <section className="featured-movies-container">
                <h2>Featured Movies:</h2>
                <div className="featured-movies">
                {
                    store.map((item, index) => {
                        return (
                            <div key={index} className="featured-movie">
                                <a href="#"><img src={item.image} alt={item.alt} /></a>
                                <div className="movie-info">
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </section>  
        </main>
    );

}

export default Home;