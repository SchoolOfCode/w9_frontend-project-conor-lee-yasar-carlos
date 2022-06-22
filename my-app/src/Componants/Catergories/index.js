import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'

function Categories({ handleClick, id }) {
  return (
     <div className='category-button-container'>
        <button id={id} className='day-one-button category-button' onClick={handleClick}>Day {id} </button>
        <div className='day-rating'>
            <div className='category-button-star'><BsFillStarFill/></div>
            <div className='category-button-rating'>2.5</div>
        </div>
     </div>
  )
}

export default Categories