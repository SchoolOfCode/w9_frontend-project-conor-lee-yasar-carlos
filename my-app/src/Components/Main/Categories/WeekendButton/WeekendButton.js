import React from 'react'

// renders the weekend button which renders weekendlist items onclick

function WeekendButton({weekendButtonClick}) {
  return (
    <button className="weekend-button" onClick={weekendButtonClick}>Weekend</button>
  )
}

export default WeekendButton

