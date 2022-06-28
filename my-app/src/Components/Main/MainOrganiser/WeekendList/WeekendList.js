import React from "react";
import WeekendListItem from "./WeekendItem/WeekendItem";


function WeekendList({
  weekendTaskData,
  weekendClick,
  weekendListDelete,
  updateStarRating
}) {
    return (
      <div className="weekend-todo-box">
        <WeekendListItem
          key={weekendTaskData.id}
          weekendClick={weekendClick}
          listData={weekendTaskData.topic}
          weekendListDelete={weekendListDelete}
          weekendId={weekendTaskData.id}
          weekendRating={weekendTaskData.rating}
          updateStarRating={updateStarRating}
        />
      </div>
    )
  }

export default WeekendList;
