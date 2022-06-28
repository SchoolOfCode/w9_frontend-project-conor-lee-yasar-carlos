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

  // when requesting the weekend tasks
  if (weekendCheck === true) {
    // create a list of just weekend items
    const weekendTasks = [];
    weekendListData.forEach(function(day) {
      day.list.forEach(function(task){
        if (task.weekend === true) {
          weekendTasks.push(task);
        }
      })
    });

    // check if we are rendering the weekend or day tasks
    return (
      <div className="todo" style={{visibility: mainOrganiserClass }}>
        <div className="todo-container">
          <div className="h2">
            <h2>Today's subjects</h2>
          </div>
          {
            weekendTasks.map((task, index) => (
              <WeekendList
                key={index}
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
