import React from 'react'

function ListItem({id, text}) {
  return (
    <div className='todo-list-item'>
      <p className='list-item-text'>{text}</p>
    </div>
  )
}

export default ListItem