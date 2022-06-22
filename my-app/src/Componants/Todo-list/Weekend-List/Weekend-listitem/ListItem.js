import React from 'react'
import { TiDeleteOutline} from 'react-icons/ti'
import StarRating from '../../Todo-List/StarRating'
import { BsChevronCompactDown } from 'react-icons/bs'


function WeekendListItem({id, listData, weekendListDelete, weekendId}) {
  console.log(listData)
  return (
      <>
      <div className='weekend-item-conponent'>
        <div className='weekend-todo-list-item'>
            <div className='todo-list-content'>
              <p className='list-item-text'>{listData}</p>
              <div className='icon-box' >    
                <StarRating />         
              </div>
            </div>
            <span className='chevron-icon'><BsChevronCompactDown /></span>
        </div>
        <div className='add-to-weekend' data-txt={listData} onClick={() => {weekendListDelete(weekendId)}}>
            <span className='weekend-cross-icon'><TiDeleteOutline id={id} data-txt={listData} onClick={() => {weekendListDelete(weekendId)}} /></span>
        </div>
      </div>
    </>
    
  )
}

export default WeekendListItem

