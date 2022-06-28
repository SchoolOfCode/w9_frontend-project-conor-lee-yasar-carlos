import React from "react";
import ScheduleList from "./ScheduleList/ScheduleList";
import ResourceList from "./ResourcesList/ResourceList";
import WeekendList from "./WeekendList/WeekendList";

function MainOrganiser({
  mainOrganiserClass,
  listData,
  weekendListData,
  weekendCheck,
  weekendClick,
  weekendListDelete,
  updateStarRating,
  updateCompletedTask,
  updateTaskComment
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
      <div className="todo" style={{visibility: mainOrganiserClass }}>
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
                updateTaskComment={updateTaskComment}
              />
            ))
          }
        </div>
        <div className="resources-container">
          <ResourceList
            resourceData={listData.resources}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="todo" style={{visibility: mainOrganiserClass}}>
        <div className="todo-container">
          <ScheduleList 
            weekendClick={weekendClick}
            listData={listData.list}
            updateStarRating={updateStarRating}
            updateCompletedTask={updateCompletedTask}
            updateTaskComment={updateTaskComment}
          />
        </div>
        <div className="resources-container">
          <ResourceList
            resourceData={listData.resources}
          />
        </div>
      </div>
    );
  }
}

export default MainOrganiser;
