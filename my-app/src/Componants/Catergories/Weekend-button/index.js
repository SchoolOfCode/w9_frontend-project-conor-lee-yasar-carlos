import React from 'react'

function WeekendButton({weekendButtonClick}) {
  return (
    <button className="weekend-button" onClick={weekendButtonClick}>Weekend</button>
  )
}

export default WeekendButton

// weekend-button