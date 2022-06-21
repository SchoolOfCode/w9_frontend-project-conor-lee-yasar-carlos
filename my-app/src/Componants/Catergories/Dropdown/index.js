import React from 'react'

function Dropdown({ setInput }) {
  const statusHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  return (
    <form >
      <div>
        <select onChange={statusHandler} className="select-week">
          <option className="select-week" value="Week 1">Week 1</option>
          <option className="select-week" value="Week 2<">Week 2</option>
          <option className="select-week" value="Week 3">Week 3</option>
          <option className="select-week" value="Week 4">Week 4</option>
          <option className="select-week" value="Week 4">Week 4</option>
          <option className="select-week" value="Week 4">Week 4</option>
          <option className="select-week" value="Week 4">Week 4</option>
          <option className="select-week" value="Week 4">Week 4</option>
          <option className="select-week" value="Week 4">Week 4</option>
          <option className="select-week" value="Week 4">Week 4</option>
          <option className="select-week" value="Week 4">Week 4</option>
          <option className="select-week" value="Week 4">Week 4</option>
        </select>
      </div>
    </form>
  );
}

export default Dropdown;