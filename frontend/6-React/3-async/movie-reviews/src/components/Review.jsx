import React from 'react';
import StarRating from "./StarRating";

const Review = ({review}) => {

    return (
      <div className = "reviewContainer">
        <p className="reviewUser">{review.user}</p>
        <p className="review">{review.review}</p>
        <StarRating 
            stars={review.rating} 
            disabled={true}
        />
      </div>
    )
}

export default Review;