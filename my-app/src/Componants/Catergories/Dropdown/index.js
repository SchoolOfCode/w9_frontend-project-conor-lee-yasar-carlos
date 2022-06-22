import React from 'react'
import { useState } from 'react'

function Dropdown({ selected, setSelected, setInput}) {
// function Dropdown({ setInput }) {
//   const statusHandler = (e) => {
//     console.log(e.target.value);
//     setInput(e.target.value);
//   };

  const [isActive, setIsActive] = useState(true)
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  
  return (

      <div className='dropdown'>
        <div className='dropdown-button' onClick={e => setIsActive(!isActive)}>{selected}</div>
        {isActive && (
          <div className='dropdown-content'>
            {options.map((option) => (
              <div
              onClick={(e) => {
              setSelected("Week " + option);
              setInput(option)
              setIsActive(false);
              }}
              className="dropdown-item">
              {"Week " + option}
              </div>
            ))}
          
          </div>
        )
        }
      </div>
  )}
export default Dropdown;