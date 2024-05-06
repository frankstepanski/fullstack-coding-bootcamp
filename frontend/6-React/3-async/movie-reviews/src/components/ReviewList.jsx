import React from 'react';
import Review from "./Review"


const ReviewList = ({reviews}) => {

    return (
        
      <fieldset className="reviewsContainer">
        <legend>Reviews:</legend>
        {
          reviews.map((review, index) => {
            return (
              <div className="reviews">
                <Review key = {index} review = {review} />
              </div>
            )
          })
        }
        </fieldset>
    );
}

export default ReviewList;