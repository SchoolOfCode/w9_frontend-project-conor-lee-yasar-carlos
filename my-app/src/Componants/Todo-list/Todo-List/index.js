import React from "react";
import ListItem from "./Todo-listitem/ListItem";


function TodoList({
  listData,
  weekendClick,
}) {
    return (
        <div>
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
    );
  }

export default TodoList;
