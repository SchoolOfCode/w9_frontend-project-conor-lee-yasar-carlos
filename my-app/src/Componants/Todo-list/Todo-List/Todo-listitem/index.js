import React from 'react'
import StarRating from '../StarRating'
import { FiPlusCircle } from 'react-icons/fi'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BsChevronCompactDown } from 'react-icons/bs'


function ListItem({id, taskName, weekend, completed, rating, weekendClick, updateStarRating}) {
  return (
    <div className='comlete-list-item'>
      <div className='completed'>
          <span className='tick-icon'><AiOutlineCheckCircle  id={id} onClick={weekendClick}/></span>
      </div>
      <div className='todo-list-item'>
        <div className='todo-list-content'>
          <p className='list-item-text'>{taskName}</p>
          <div className='icon-box' >
            <StarRating taskRating={rating} updateStarRating={updateStarRating} taskId={id} />         
          </div>
        </div>
        <span className='chevron-icon'><BsChevronCompactDown /></span>
      </div>
      <button className='add-to-weekend' id={id} data-txt={taskName} onClick={weekendClick}>
          <span className='plus-icon'><FiPlusCircle  id={id} data-txt={taskName} onClick={weekendClick}/></span>
      </button>
    </div>
    
  )
}

export default ListItem

