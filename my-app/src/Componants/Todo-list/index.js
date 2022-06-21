import React from "react";
import ResourceItem from "./Resources-listitem";
import ListItem from "./Todo-listitem/ListItem";
import WeekendListItem from "./Weekend-listitem/ListItem";

function Todo({
  toDoClass,
  resourceClass,
  listData,
  resourceData,
  weekendListData,
  weekendCheck,
  weekendClick,
  weekendListDelete,
}) {
  if (weekendCheck === true) {
    return (
      <div className="todo">
        <div className={toDoClass}>
          <div className="h2">
            <h2>Today's subjects</h2>
          </div>
          {weekendListData.map((input) => {
            return (
              <WeekendListItem
                key={input.id}
                weekendClick={weekendClick}
                listData={input.topic}
                weekendListDelete={weekendListDelete}
                weekendId={input.id}
              />
            );
          })}
        </div>
        <div className={resourceClass}>
          <div className="h2">
            <h2>Resources</h2>
          </div>
          {resourceData.map((input) => {
            return (
              <ResourceItem
                key={input.id}
                data={input.topic}
                link={input.url}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="todo">
        <div className={toDoClass}>
          <div className="h2">
            <h2>Today's subjects</h2>
          </div>
          {listData.map((input) => {
            return (
              <ListItem
                key={input.id}
                weekendClick={weekendClick}
                listData={input.topic}
                id={input.id}
              />
            );
          })}
        </div>
        <div className={resourceClass}>
          <div className="h2">
            <h2>Resources</h2>
          </div>
          {resourceData.map((input) => {
            return (
              <ResourceItem
                key={input.id}
                data={input.topic}
                link={input.url}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Todo;
