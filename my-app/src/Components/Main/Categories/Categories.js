import React from "react";
import DayButton from "./DayButton/DayButton";
import Dropdown from "./Dropdown/Dropdown";
import WeekendButton from "./WeekendButton/WeekendButton";

function Categories({ dayData, handleClick, updateWeekNumber, weekendButtonClick }) {
  return (
    <div className="categories-container">
      <div className="categories-box">
        <div className="categories">
          <Dropdown updateWeekNumber={updateWeekNumber} />
          <div className="categories-map">
            {dayData.map((data, index) => {
              return (
                <DayButton
                  key={index}
                  handleClick={handleClick}
                  id={data.day}
                  dayData={dayData[index].list}
                />
              );
            })}
          </div>
          <WeekendButton weekendButtonClick={weekendButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default Categories;
