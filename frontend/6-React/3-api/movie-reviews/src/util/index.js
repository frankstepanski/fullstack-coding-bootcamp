

const calcMovieRating = (reviews) => {

    let ratings = 0;
   
    reviews.forEach(review => {
        console.log(review.rating);
      ratings += review.rating;
    })
  
    return (ratings / reviews.length).toFixed(2);
  
  }
  
  export {calcMovieRating}