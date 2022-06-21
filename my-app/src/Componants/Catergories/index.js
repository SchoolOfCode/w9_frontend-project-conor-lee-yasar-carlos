import React from 'react'

function Categories({ handleClick, text, testButton }) {
  return (
    <div className='categories'>
     <button className='day-one-button category-button' onClick={handleClick}>Day {testButton} </button>
    </div>
  )
}

export default Categories