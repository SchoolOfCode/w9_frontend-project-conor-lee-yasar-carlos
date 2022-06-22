import React from 'react'
import StarRating from '../StarRating'
import { FiPlusCircle } from 'react-icons/fi'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BsChevronCompactDown } from 'react-icons/bs'


function ListItem({id, listData, weekendClick}) {
  return (
    <div className='comlete-list-item'>
      <div className='completed'>
          <span className='tick-icon'><AiOutlineCheckCircle  id={id} onClick={weekendClick}/></span>
      </div>
      <div className='todo-list-item'>
        <div className='todo-list-content'>
          <p className='list-item-text'>{listData[0].toUpperCase() + listData.substring(1)}</p>
          <div className='icon-box' >    
            <StarRating />         
          </div>
        </div>
        <span className='chevron-icon'><BsChevronCompactDown /></span>
      </div>
      <div className='add-to-weekend' id={id} data-txt={listData} onClick={weekendClick}>
          <span className='plus-icon'><FiPlusCircle  id={id} data-txt={listData} onClick={weekendClick}/></span>
      </div>
    </div>
    
  )
}

export default ListItem

