import React from 'react'
import { ImCross } from 'react-icons/im'
import StarRating from '../../Todo-List/StarRating'
import { BsChevronCompactDown } from 'react-icons/bs'


function WeekendListItem({id, listData, weekendListDelete, weekendId}) {
  console.log(listData)
  return (
      <>
      <div className='weekend-item-conponent'>
        <div className='todo-list-item'>
            <div className='todo-list-content'>
              <p className='list-item-text'>{listData}</p>
              <div className='icon-box' >    
                <StarRating />         
              </div>
            </div>
            <span className='chevron-icon'><BsChevronCompactDown /></span>
        </div>
        <div className='add-to-weekend' data-txt={listData} onClick={() => {weekendListDelete(weekendId)}}>
            <span className='plus-icon'><ImCross id={id} data-txt={listData} onClick={() => {weekendListDelete(weekendId)}} /></span>
        </div>
      </div>
    </>
    
  )
}

export default WeekendListItem

