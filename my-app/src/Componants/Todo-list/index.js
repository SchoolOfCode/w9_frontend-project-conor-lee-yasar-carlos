import React from "react";
import ListItem from "./Todo-listitem/ListItem";

function Todo({ toDoClass, resourceClass, data }) {
  return (
    <div className="todo">
      <div className={toDoClass}>
        <div className="h2">
          <h2>Today's subjects</h2>
        </div>
        {data.map((input) => {
          return <ListItem text={input.content} id={input.id} />;
        })}
      </div>
      <div className={resourceClass}>
        <div className="h2">
          <h2>Resources</h2>
        </div>
        <div className="resource-list-item"></div>
      </div>
    </div>
  );
}

export default Todo;
