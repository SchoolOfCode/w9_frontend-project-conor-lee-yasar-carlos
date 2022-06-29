import React from 'react'
import { TiDeleteOutline} from 'react-icons/ti'
import StarRating from '../../ScheduleList/StarRating/StarRating'
import { BsChevronCompactDown } from 'react-icons/bs'

// renders any schedule items that were added to the weekend list by the user 
// items can then be given a rating and removed when completed

function WeekendItem({
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
            <span aria-label="accordion-shevron" className='chevron-icon'><BsChevronCompactDown /></span>
        </div>
        <button className='add-to-weekend' data-txt={listData} onClick={() => {weekendListDelete(weekendId)}}>
            <span className='weekend-cross-icon'><TiDeleteOutline id={id} data-txt={listData} onClick={() => {weekendListDelete(weekendId)}} /></span>
        </button>
      </div>
    </>
    
  )
}

export default WeekendItem

