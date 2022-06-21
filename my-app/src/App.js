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
  const [dropdownData, setDropdownData] = useState(1);
  const [weekendCheck, setWeekendCheck] = useState(false);

  const [weekendListData, setWeekendListData] = useState([]);
  
  // { list: [{ id: 1, topic: "" }]}

  const [dayData, setDayData] = useState([
    { list: [{ id: 1, topic: "" }], 
      resouces: [{ id: 1, topic: "", url: "" }]
  }]);

  const [dayButtonData, setDayButtonData] = useState([
    { list: [{ id: 1, topic: "" }]}]);

  function handleClick(e) {
    setWeekendCheck(false)
    setDayId(e.target.id - 1);
    setToDoClass("todo-container");
    setResourcesClass("resources-container");
  }

  function weekendAddClick(e) {
    console.log(e.target.dataset.txt)
    console.log(e.target.id)

    setWeekendListData([...weekendListData, { id: e.target.id, topic: e.target.dataset.txt }])

    console.log(weekendListData)
  }

  function weekendButtonClick() {
    setWeekendCheck(true);
    setToDoClass("todo-container");
    setResourcesClass("resources-container");
    console.log(weekendCheck)
    console.log(...weekendListData)
  }

  function weekendDelete(input) {
    setWeekendListData(weekendListData.filter((index) => index.id !== input))
  }

  async function getDayData() {
    let response = await fetch(`http://localhost:3000/api/v1/1/weeks/${dropdownData}`);
    let data = await response.json();
    setDayData(data.payload);
    setDayButtonData(data.payload);
  }

  useEffect(() => {
    getDayData();
  }, [dropdownData]);
  

  return (
    <div className="App">
      <NavBar />
      <h1>Bootcamper Organiser</h1>
      <div className="title-underline"></div>
      <main>
        <div className="categories">
          <Dropdown input={dropdownData} setDropdownData={setDropdownData} />
          <div className="categories-map">
            {dayButtonData.map((input) => {
              return (
                <Categories
                  key={input.day + 1}
                  id={input.day}
                  dayResourceData={input.resouces}
                  dayListData={input.list}
                  handleClick={handleClick}
                />
              );
            })}
          </div>
          <WeekendButton weekendButtonClick={weekendButtonClick} />
        </div>
        <Todo
          weekendClick={weekendAddClick}
          toDoClass={toDoClass}
          resourceClass={resourcesClass}
          listData={dayData[dayId].list}
          resourceData={dayData[dayId].resouces}
          weekendCheck={weekendCheck}
          weekendListData={weekendListData}
          weekendListDelete={weekendDelete}
        />
      </main>
    </div>
  );
}

export default App;
