import React, { useState, useEffect } from "react";

/*
     We can request data from the GIPHY API asynchronously.

     Need API key:
     https://developers.giphy.com/

     Different API endpoints you can use:
     https://developers.giphy.com/docs/api/endpoint/

     1st scenario - App Initially Renders:

     1- Component render intially
     2- useEffect will run
     3- Fetch will complete (inside the useEffect)
     4- State variable will mutate (change)
     5- Component will re-render
     6- useEffect will not run again
     7- Component will show image

     2nd scenario - User enters keyword in input:

     1- Form submit event fires
     2- handleSubmit() executes
     3- FetchImage(query) executes
     4- fetch() calls GIPHY API
     5- State variables are mutated
     6- Component re-renders
     7- Component shows new image

     note: Not triggering useEffect because of a non-controlled form

*/

function GiphySearch({initialQuery}) {

    const [imgSrc, setImgSrc] = useState("");
    const [alt, setAlt] = useState("");

    const fetchImage = (query = initialQuery) => { 
   
      const encodedQuery = encodeURIComponent(query);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=StGEROY7n963OaOR3Cn3JMMHPbNnEXwo&tag=${encodedQuery}`;

      fetch(url, {
          method: 'GET',
      }).then(function(response) {
           // making sure a valid response was returned
           if (response.ok) {
             return response.json();
           }
           // else a problem happened, move on to the catch() statement
           return Promise.reject(response);
      }).then(function({data}) {
           // update state for imageSrc and alt state variables
           setImgSrc(data.images.fixed_width.url);
           setAlt(data.title)
      }).catch(function(error) {
            console.warn('Something went wrong', error);
      });
    }
  
    const handleSubmit = (evt) => {
        evt.preventDefault();
        // uncontrolled input field reference
        fetchImage(evt.target.query.value)
    }

    // useEffect is running a funcion
    // note: This useEffect only runs once because initialQuery never changes
    useEffect(fetchImage, [initialQuery]);

    return (
          <>  
                <form onSubmit={handleSubmit}>
                   Enter a word or phrase:
                   { /* uncontrolled form input  */}
                   <input type="text" placeholder="cat" name="query" />
                   <button type="submit">Search</button>
                 </form>
                <section>
                     <img src={imgSrc} alt={alt} />
                </section>
            
            </>
         );
  }

  export default GiphySearch;