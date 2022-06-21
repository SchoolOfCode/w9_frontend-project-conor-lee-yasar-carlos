import React from 'react'

function Dropdown({ setDropdownData }) {
  const statusHandler = (e) => {
    console.log(e.target.value);
    setDropdownData(e.target.value);
  };

  return (
    <form >
      <div>
        <select onChange={statusHandler} className="select-week">
          <option className="select-week" value="1">Week 1</option>
          <option className="select-week" value="2">Week 2</option>
          <option className="select-week" value="3">Week 3</option>
          <option className="select-week" value="4">Week 4</option>
          <option className="select-week" value="5">Week 5</option>
          <option className="select-week" value="6">Week 6</option>
          <option className="select-week" value="7">Week 7</option>
          <option className="select-week" value="8">Week 8</option>
          <option className="select-week" value="9">Week 9</option>
          <option className="select-week" value="10">Week 10</option>
          <option className="select-week" value="11">Week 11</option>
          <option className="select-week" value="12">Week 12</option>
        </select>
      </div>
    </form>
  );
}

export default Dropdown;