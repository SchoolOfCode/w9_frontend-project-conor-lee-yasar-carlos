import React from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import { AiOutlineCheckCircle, AiFillStar } from 'react-icons/ai'


function ListItem({id, text, weekendClick}) {
  return (
    <div className='todo-list-item'>
      <p className='list-item-text'>{text}</p>
      <div className='icon-box' >
        <span className='plus-icon'><AiOutlineCheckCircle  id={id} onClick={weekendClick}/></span>
        <span className='plus-icon'><AiFillStar  id={id} onClick={weekendClick}/></span>
        <span className='plus-icon'><FiPlusCircle  id={id} onClick={weekendClick}/></span>
      </div>
    </div>
  )
}

export default ListItem

