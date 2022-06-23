import React from "react";
import ListItem from "./Todo-listitem";


function TodoList({
  listData,
  weekendClick,
  updateStarRating,
  updateCompletedTask,
}) {
    return (
        <div className="todo-box">
          <div className="h2">
            <h2>Today's subjects</h2>
          </div>
          {listData.map((task) => {
            return (
              <ListItem
                key={task.id}
                weekendClick={weekendClick}
                taskName={task.topic}
                weekend={task.weekend}
                completed={task.completed}
                rating={task.rating}
                id={task.id}
                updateStarRating={updateStarRating}
                updateCompletedTask={updateCompletedTask}
              />
            );
          })}
        </div>
    );
  }

export default TodoList;
