import React from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import { AiOutlineCheckCircle, AiFillStar } from 'react-icons/ai'


function WeekendListItem({id, listData, weekendClick,weekendListDelete, weekendId}) {

  return (
    <div className='todo-list-item'>
      <p className='list-item-text'>{listData}</p>
      <div className='icon-box' >
        <span className='plus-icon'><AiOutlineCheckCircle id={id}/></span>
        <span className='plus-icon'><AiFillStar id={id}/></span>
        <span className='plus-icon'><FiPlusCircle id={id} data-txt={listData} onClick={weekendClick}/></span>
        <span className='plus-icon'><FiPlusCircle id={id} data-txt={listData} onClick={() => {weekendListDelete(weekendId)}}/></span>
      </div>
    </div>
  )
}

export default WeekendListItem

