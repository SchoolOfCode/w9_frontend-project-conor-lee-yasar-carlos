import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'

function Categories({ handleClick, id, dayListData }) {
   // work out the average for the day according to the tasks rating
   let average = 0;
   let result = dayListData.reduce((pValue, cValue) => pValue += cValue.rating, 0);
   average = +(result / dayListData.length).toFixed(2);

   return (
      <div className='category-button-container'>
         <button id={id} className='day-one-button category-button' onClick={handleClick}>Day {id} </button>
         <div className='day-rating'>
            <div className='category-button-star'><BsFillStarFill/></div>
            <div className='category-button-rating'>{average}</div>
         </div>
      </div>
   )
}

export default Categories