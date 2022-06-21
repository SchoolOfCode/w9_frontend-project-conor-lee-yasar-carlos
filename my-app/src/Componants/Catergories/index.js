import React from 'react'

function Categories({ handleClick, text, testButton }) {
  return (
      
     <button className='day-one-button category-button' onClick={handleClick}>Day {testButton} </button>
    
  )
}

export default Categories