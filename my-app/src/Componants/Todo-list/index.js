import React from "react";
import TodoList from "./Todo-List";
import ResourceList from "./Resources-List";
import WeekendList from "./Weekend-List";

function Todo({
  toDoClass,
  resourceClass,
  listData,
  resourceData,
  weekendListData,
  weekendCheck,
  weekendClick,
  weekendListDelete,
  updateStarRating
}) {
  if (weekendCheck === true) {
    return (
      <div className="todo">
        <div className={toDoClass}>
          <WeekendList
            weekendListData={weekendListData}
            weekendListDelete={weekendListDelete}
            weekendClick={weekendClick}
          />
        </div>
        <div className={resourceClass}>
          <ResourceList
            resourceData={resourceData}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="todo">
        <div className={toDoClass}>
          <TodoList weekendClick={weekendClick} listData={listData} updateStarRating={updateStarRating} />
        </div>
        <div className={resourceClass}>
          <ResourceList
            resourceData={resourceData}
          />
        </div>
      </div>
    );
  }
}

export default Todo;
