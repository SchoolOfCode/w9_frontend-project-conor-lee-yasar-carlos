import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./Componants/Nav-bar";
import Categories from "./Componants/Catergories";
import Todo from "./Componants/Todo-list";
import Dropdown from "./Componants/Catergories/Dropdown";
import WeekendButton from "./Componants/Catergories/Weekend-button";

function App() {
  const [toDoClass, setToDoClass] = useState("default-invis");
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
    setToDoClass("todo");
  }

  // Adds a list item to the weekend list
  function weekendAddClick({taskId, topic}) {
    setWeekendListData([
      ...weekendListData,
      { id: taskId, topic: topic },
    ]);
    updateWeekendTask(taskId)
  }

  // weekend button click changes div classes to visible and sets check to true
  function weekendButtonClick() {
    setWeekendCheck(true);
    setToDoClass("todo");
    console.log(weekendCheck);
  }

  // deletes a list item from the weekend list
  function weekendDelete(weekendId) {
    setWeekendListData(weekendListData.filter((index) => index.id !== weekendId));
    updateWeekendTask(weekendId)
  }


  // update the star rating of a task
  function updateStarRating({rating, taskId}) {
    let found = false;
    dayData.forEach(day => {
      day.list.forEach((task, index) => {
        if (task.id === taskId) {
          setDayData(() => [...dayData.slice(0, day.day - 1), {...day, list: [...day.list.slice(0, index), {...task, rating: rating}, ...day.list.slice(index + 1)]}, ...dayData.slice(day.day)])
          found = true;
          return
        }
      })
      if (found) {return}
    })
  }

  // update if a task in the weekend
  // takes in the task id and toogles the weekend from true to false
  function updateWeekendTask(taskId) {
    let found = false;
    dayData.forEach(day => {
      day.list.forEach((task, index) => {
        if (task.id === taskId) {
          setDayData(() => [...dayData.slice(0, day.day - 1), {...day, list: [...day.list.slice(0, index), {...task, weekend: !task.weekend}, ...day.list.slice(index + 1)]}, ...dayData.slice(day.day)])
          found = true;
          return
        }
      })
      if (found) {return}
    })
  }

  // update the completed state for a task
  function updateCompletedTask(taskId) {
    let found = false;
    dayData.forEach(day => {
      day.list.forEach((task, index) => {
        if (task.id === taskId) {
          setDayData(() => [...dayData.slice(0, day.day - 1), {...day, list: [...day.list.slice(0, index), {...task, completed: !task.completed}, ...day.list.slice(index + 1)]}, ...dayData.slice(day.day)])
          found = true;
          return
        }
      })
      if (found) {return}
    })
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
          listData={dayData[dayId].list}
          resourceData={dayData[dayId].resources}
          weekendCheck={weekendCheck}
          weekendListData={dayData}
          weekendListDelete={weekendDelete}
          updateStarRating={updateStarRating}
          updateCompletedTask={updateCompletedTask}
        />
      </main>
    </div>
  );
}

export default App;
