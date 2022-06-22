import React from 'react'

function Categories({ handleClick, id }) {
  return (
     <button id={id} className='day-one-button category-button' onClick={handleClick}>Day {id} </button>
  )
}

export default Categories