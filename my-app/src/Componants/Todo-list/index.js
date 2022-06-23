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
  updateStarRating,
  updateCompletedTask
}) {
  if (weekendCheck === true) {
    return (
      <div className={toDoClass}>
        <div className="todo-container">
          <WeekendList
            weekendListData={weekendListData}
            weekendListDelete={weekendListDelete}
            weekendClick={weekendClick}
          />
        </div>
        <div className="resources-container">
          <ResourceList
            resourceData={resourceData}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={toDoClass}>
        <div className="todo-container">
          <TodoList weekendClick={weekendClick} listData={listData} updateStarRating={updateStarRating} updateCompletedTask={updateCompletedTask} />
        </div>
        <div className="resources-container">
          <ResourceList
            resourceData={resourceData}
          />
        </div>
      </div>
    );
  }
}

export default Todo;
