import React from 'react'
import { ImCross } from 'react-icons/im'


function WeekendListItem({id, listData, weekendListDelete, weekendId}) {

  return (
    <div className='todo-list-item'>
      <p className='list-item-text'>{listData}</p>
      <div className='icon-box' >
        <span className='plus-icon'><ImCross id={id} data-txt={listData} onClick={() => {weekendListDelete(weekendId)}}/></span>
      </div>
    </div>
  )
}

export default WeekendListItem

