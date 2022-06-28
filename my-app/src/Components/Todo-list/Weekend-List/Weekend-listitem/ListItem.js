import React from 'react'
import { TiDeleteOutline} from 'react-icons/ti'
import StarRating from '../../Todo-List/StarRating'
import { BsChevronCompactDown } from 'react-icons/bs'


function WeekendListItem({
  id,
  listData,
  weekendListDelete,
  weekendId,
  weekendRating,
  updateStarRating
}) {
  return (
      <>
      <div className='weekend-item-conponent'>
        <div className='weekend-todo-list-item'>
            <div className='todo-list-content'>
              <p className='list-item-text'>{listData[0].toUpperCase() + listData.substring(1)}</p>
              <div className='icon-box' >    
                <StarRating taskRating={weekendRating} taskId={weekendId} updateStarRating={updateStarRating} />         
              </div>
            </div>
            <span className='chevron-icon'><BsChevronCompactDown /></span>
        </div>
        <button className='add-to-weekend' data-txt={listData} onClick={() => {weekendListDelete(weekendId)}}>
            <span className='weekend-cross-icon'><TiDeleteOutline id={id} data-txt={listData} onClick={() => {weekendListDelete(weekendId)}} /></span>
        </button>
      </div>
    </>
    
  )
}

export default WeekendListItem
