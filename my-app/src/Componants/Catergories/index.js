import React from 'react'

function Categories({ handleClick, text, dayButton, id }) {
  return (
      
     <button id={id} className='day-one-button category-button' onClick={handleClick}>Day {dayButton} </button>
    
  )
}

export default Categories