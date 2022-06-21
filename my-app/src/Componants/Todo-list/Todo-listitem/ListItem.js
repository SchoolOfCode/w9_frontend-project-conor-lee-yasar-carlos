import React from 'react'
import { FiPlusCircle } from 'react-icons/fi'

function ListItem({id, text}) {
  return (
    <div className='todo-list-item'>
      <p className='list-item-text'>{text}</p>
      <div className='icon-box'>
        <span className='Plus-icon'><FiPlusCircle/></span>
      </div>
    </div>
  )
}

export default ListItem

