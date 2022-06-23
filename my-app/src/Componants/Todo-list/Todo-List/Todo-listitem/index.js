import React from "react";
import StarRating from "../StarRating";
import { FiPlusCircle } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsChevronCompactDown } from "react-icons/bs";
import { useState } from "react";

function ListItem({
  id,
  taskName,
  weekend,
  completed,
  rating,
  weekendClick,
  updateStarRating,
  updateCompletedTask
}) {

  // const [active, setActive] = useState(false);

  // prep data when weekend button is clicked
  function handleWeekendClick(e) {
    if (!weekend) {
      const taskInfo = {
        taskId: id,
        topic: e.currentTarget.dataset.txt,
      }
      weekendClick(taskInfo);
    }
  }

  

  return (
    <>
    <div className="comlete-list-item">
      <button className="completed" onClick={() => updateCompletedTask(id)} id={id}>
        <span className="tick-icon">
          <AiOutlineCheckCircle id={id} />
        </span>
      </button>
      <div className="todo-list-item" style={{ backgroundColor: completed ? "grey" : "" }} >
        <div className="todo-list-content"  >
          <p className="list-item-text">{taskName}</p>
          <div className="icon-box">
            <StarRating
              taskRating={rating}
              updateStarRating={updateStarRating}
              taskId={id}
            />
          </div>
        </div>
        <span className="chevron-icon">
          <BsChevronCompactDown />
        </span>
      </div>
      <button 
        className='add-to-weekend'
        id={id}
        data-txt={taskName}
        onClick={handleWeekendClick}
        disabled={completed}
       >
          <span className='plus-icon'>
            <FiPlusCircle  id={id} data-txt={taskName} />
          </span>
      </button>
    </div>
    <div className="accordion">
      <input></input>
      <button className="accordion-button">Submit</button>
    </div>
    </>
  );
}

export default ListItem;
