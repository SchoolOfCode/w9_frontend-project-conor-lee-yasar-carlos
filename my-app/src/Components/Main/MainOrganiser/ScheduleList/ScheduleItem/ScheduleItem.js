import React from "react";
import StarRating from "../StarRating/StarRating";
import { FiPlusCircle } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsChevronCompactDown } from "react-icons/bs";
import { useState } from "react";


// This component takes in quiet a bit of props to build
// props: updateStarRating to be used by StarRating component
function ScheduleItem({
  id,
  taskName,
  weekend,
  completed,
  rating,
  weekendClick,
  updateStarRating,
  updateCompletedTask,
  taskComment,
  updateTaskComment
}) {
  const [active, setActive] = useState(false);

  // single source of truth
  const [comment, setComment] = useState(taskComment)

  // used the <input> onChange
  function handleComment(e) {
    setComment(e.target.value);
  }

  // this will call the function in charge of updating the app state for the task
  function handleCommentClick(taskId) {
    updateTaskComment({taskId: id, comment: comment});
  }

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
          <BsChevronCompactDown onClick={() => {active ? setActive(false) : setActive(true)}} />
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
    <div className={active ? "accordion" : "default-invis-accordion" }>
      <input onChange={handleComment} value={comment} />
      <button className="accordion-button" onClick={handleCommentClick}>Submit</button>
    </div>
    </>
  );
}

export default ScheduleItem;
