import React from "react";
import { useState } from "react";

  // Renders a drowdown and passes the selected option up to the Main component 
  // and based on the selection made fetches required data from the database

function Dropdown({ updateWeekNumber }) {
  const [selected, setSelected] = useState("Choose Week");
  const [isActive, setIsActive] = useState(true);
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="dropdown">
      <div className="dropdown-button" onClick={(e) => setIsActive(!isActive)}>
        {selected}
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <div
              key={index}
              id={option}
              onClick={(e) => {
                updateWeekNumber(e);
                setSelected("Week " + option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {"Week " + option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Dropdown;
