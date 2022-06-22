import React from 'react'
import { useState } from 'react'

function Dropdown({ selected, setSelected}) {
  const [isActive, setIsActive] = useState(true)
  const options = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10", "Week 11", "Week 12" ]
  
  return (

      <div className='dropdown'>
        <div className='dropdown-button' onClick={e => setIsActive(!isActive)}>{selected}</div>
        {isActive && (
          <div className='dropdown-content'>
            {options.map((option) => (
              <div
              onClick={(e) => {
              setSelected(option);
              setIsActive(false);
              }}
              className="dropdown-item">
              {option}
              </div>
            ))}
          
          </div>
        )
        }
      </div>
  )}
  
export default Dropdown;