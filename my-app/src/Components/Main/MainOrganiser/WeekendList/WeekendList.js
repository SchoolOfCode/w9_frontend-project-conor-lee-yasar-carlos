import React from "react";
import WeekendItem from "./WeekendItem/WeekendItem";


// The component just holds the list of weekend items
function WeekendList({
  weekendTaskData,
  weekendClick,
  weekendListDelete,
  updateStarRating
}) {
    return (
      <div className="weekend-todo-box">
        <WeekendItem
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
