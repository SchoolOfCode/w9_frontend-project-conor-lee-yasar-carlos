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
  updateCompletedTask,
}) {
  if (weekendCheck === true) {
    // loop through the whole weeks tasks to get the ones marked for weekend study
    const weekendTasks = [];
    weekendListData.forEach(function(day) {
      day.list.forEach(function(task){
        if (task.weekend === true) {
          weekendTasks.push(task);
        }
      })
    });

    return (
      <div className={toDoClass}>
        <div className="todo-container">
          <div className="h2">
            <h2>Today's subjects</h2>
          </div>
          {
            weekendTasks.map(task => (
              <WeekendList
                weekendTaskData={task}
                weekendListDelete={weekendListDelete}
                weekendClick={weekendClick}
                updateStarRating={updateStarRating}
              />
            ))
          }
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
          <TodoList 
            weekendClick={weekendClick}
            listData={listData}
            updateStarRating={updateStarRating}
            updateCompletedTask={updateCompletedTask}
          />
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
