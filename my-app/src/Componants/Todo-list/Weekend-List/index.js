import React from "react";
import WeekendListItem from "./Weekend-listitem/ListItem";


function WeekendList({
  weekendListData,
  weekendClick,
  weekendListDelete,
}) {
    return (
        <>
          <div className="h2">
            <h2>Today's subjects</h2>
          </div>
          <div className="weekend-todo-box">
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
        </>
    );
  }

export default WeekendList;
