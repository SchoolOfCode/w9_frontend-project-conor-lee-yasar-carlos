import React from 'react'
import { useState } from 'react';


// Props:
// updateStarRating is used at the Main component to update the state
// taskRating is the individual rating stores for the task in the Main component state
function StarRating({ taskRating, updateStarRating, taskId }) {
  // nescessary states to build component 
  const [rating, setRating] = useState(taskRating);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => {
              setRating(index);
              updateStarRating({ rating: index, taskId: taskId });
            }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;