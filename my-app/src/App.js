import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./Componants/Nav-bar";
import Categories from "./Componants/Catergories";
import Todo from "./Componants/Todo-list";
import Dropdown from "./Componants/Catergories/Dropdown";
import WeekendButton from "./Componants/Catergories/Weekend-button";

function App() {
  const [toDoClass, setToDoClass] = useState("default-invis");
  const [resourcesClass, setResourcesClass] = useState("default-invis");
  const [dayId, setDayId] = useState(0);
  const [weekendCheck, setWeekendCheck] = useState(false);
  const [input, setInput] = useState(1)
  const [selected, setSelected] = useState("Choose Week")

  const [weekendListData, setWeekendListData] = useState([]);

  const [dayData, setDayData] = useState([
    { list: [{ id: 1, topic: "" }], resources: [{ id: 1, topic: "", url: "", rating: 2 }] },
  ]);

  // day button click changes div classes to visible and sets weekend check to false and sets the day id
  function handleClick(e) {
    setWeekendCheck(false);
    setDayId(e.target.id - 1);
    setToDoClass("todo-container");
    setResourcesClass("resources-container");
  }

  // Adds a list item to the weekend list
  function weekendAddClick(e) {
    console.log(e.target.dataset.txt);
    console.log(e.target.id);

    setWeekendListData([
      ...weekendListData,
      { id: e.target.id, topic: e.target.dataset.txt },
    ]);

    console.log(weekendListData);
  }

  // weekend button click changes div classes to visible and sets check to true
  function weekendButtonClick() {
    setWeekendCheck(true);
    setToDoClass("todo-container");
    setResourcesClass("resources-container");
    console.log(weekendCheck);
    console.log(...weekendListData);
  }

  // deletes a list item from the weekend list
  function weekendDelete(input) {
    setWeekendListData(weekendListData.filter((index) => index.id !== input));
  }

  // fetches data from the server based on the week selected from the dropdown
  async function getDayData() {
    let response = await fetch(
      `http://localhost:3000/api/v1/1/${input}`
    );
    let data = await response.json();
    setDayData(data.payload);
  }

  useEffect(() => {
    getDayData();
  }, [input]);

  
  return (
    <div className="App">
      <NavBar />
      <h1>Bootcamper Organiser</h1>
      <div className="title-underline"></div>
      <main>
      <div className='categories-container'>
      <div className="categories-box">
        <div className="categories">
        <Dropdown  selected={selected} setSelected={setSelected} setInput={setInput}/>
          <div className="categories-map">
            {dayData.map((input) => {
              return (
                <Categories
                  key={input.day + 1}
                  id={input.day}
                  dayResourceData={input.resources}
                  dayListData={input.list}
                  handleClick={handleClick}
                />
              );
            })}
          </div>
          <WeekendButton weekendButtonClick={weekendButtonClick} />
        </div>
        </div>
      </div>
        <Todo
          weekendClick={weekendAddClick}
          toDoClass={toDoClass}
          resourceClass={resourcesClass}
          listData={dayData[dayId].list}
          resourceData={dayData[dayId].resources}
          weekendCheck={weekendCheck}
          weekendListData={weekendListData}
          weekendListDelete={weekendDelete}
        />
      </main>
    </div>
  );
}

export default App;
