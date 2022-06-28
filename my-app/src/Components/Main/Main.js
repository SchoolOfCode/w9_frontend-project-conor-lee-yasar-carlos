import { useState, useEffect } from "react";
import Categories from "./Categories/Categories";
import Header from "./Header/Header";
import MainOrganiser from "./MainOrganiser/MainOrganiser";

function Main({ imageVisibility }) {
  // use by MainOrganiser component to show/hide the ScheduleList component
  const [mainOrganiserClass, setMainOrganiserClass] = useState("hidden");
  // track which day of the week was selected
  const [dayId, setDayId] = useState(0);
  // track the selected week
  const [weekNumber, setWeekNumber] = useState(1);
  // track if the weekend button was clicked so MainOrganiser component renders the right tasks
  const [weekendCheck, setWeekendCheck] = useState(false);
  // To store and used to display the tasks added to the weekend list
  const [weekendListData, setWeekendListData] = useState([]);
  
  // stores the weeks data fetched from API.
  // Dummy data was added for initial render, not used in app.
  const [dayData, setDayData] = useState([
    {
      list: [{ id: 1, topic: "" }],
      resources: [{ id: 1, topic: "", url: "", rating: 2 }],
    },
  ]);

  // day button click changes div classes to visible and sets weekend check to false 
  // and sets the day id
  function handleClick(e) {
    setWeekendCheck(false);
    setDayId(e.target.id - 1);
    setMainOrganiserClass("visible");
  }

  // used by the Dropdown component
  function updateWeekNumber(e) {
    setWeekNumber(e.target.id);
  }

  // used by ScheduleItem to update local state.
  // Same task can only be added once
  function weekendAddClick({ taskId, topic }) {
    setWeekendListData([...weekendListData, { id: taskId, topic: topic }]);
    updateWeekendTask(taskId);
  }

  // weekend button click changes div classes to visible and sets check to true
  function weekendButtonClick() {
    setWeekendCheck(true);
    setMainOrganiserClass("visible");
    console.log(weekendCheck);
  }

  // used by WeekendItem to update local state weekendTask
  function weekendDelete(weekendId) {
    setWeekendListData(
      weekendListData.filter((index) => index.id !== weekendId)
    );
    updateWeekendTask(weekendId);
  }

  // StarRating component takes this as a prop
  // to update this localstate dayData
  function updateStarRating({ rating, taskId }) {
    let found = false;
    dayData.forEach((day) => {
      day.list.forEach((task, index) => {
        if (task.id === taskId) {
          setDayData(() => [
            ...dayData.slice(0, day.day - 1),
            {
              ...day,
              list: [
                ...day.list.slice(0, index),
                { ...task, rating: rating },
                ...day.list.slice(index + 1),
              ],
            },
            ...dayData.slice(day.day),
          ]);
          found = true;
          return;
        }
      });
      if (found) {
        return;
      }
    });
  }

  // update local state dayData
  // takes in the task id and toogles the weekend from true to false
  function updateWeekendTask(taskId) {
    let found = false;
    dayData.forEach((day) => {
      day.list.forEach((task, index) => {
        if (task.id === taskId) {
          setDayData(() => [
            ...dayData.slice(0, day.day - 1),
            {
              ...day,
              list: [
                ...day.list.slice(0, index),
                { ...task, weekend: !task.weekend },
                ...day.list.slice(index + 1),
              ],
            },
            ...dayData.slice(day.day),
          ]);
          found = true;
          return;
        }
      });
      if (found) {
        return;
      }
    });
  }

  // update local state dayData
  // toggles the completed state for a task
  function updateCompletedTask(taskId) {
    let found = false;
    dayData.forEach((day) => {
      day.list.forEach((task, index) => {
        if (task.id === taskId) {
          setDayData(() => [
            ...dayData.slice(0, day.day - 1),
            {
              ...day,
              list: [
                ...day.list.slice(0, index),
                { ...task, completed: !task.completed },
                ...day.list.slice(index + 1),
              ],
            },
            ...dayData.slice(day.day),
          ]);
          found = true;
          return;
        }
      });
      if (found) {
        return;
      }
    });
  }

  // updates local state dayData
  // update/add the comment made for a specific task to the state
  function updateTaskComment({ taskId, comment }) {
    let found = false;
    dayData.forEach((day) => {
      day.list.forEach((task, index) => {
        if (task.id === taskId) {
          setDayData(() => [
            ...dayData.slice(0, day.day - 1),
            {
              ...day,
              list: [
                ...day.list.slice(0, index),
                { ...task, comment: comment },
                ...day.list.slice(index + 1),
              ],
            },
            ...dayData.slice(day.day),
          ]);
          found = true;
          return;
        }
      });
      if (found) {
        return;
      }
    });
  }

  useEffect(() => {
    // fetches data from the server based on the week selected from the dropdown
    async function getDayData() {
      let response = await fetch(`http://localhost:3000/api/v1/1/${weekNumber}`);
      let data = await response.json();
      setDayData(data.payload);
    }
    getDayData()
  }, [weekNumber]);

  return (
    <div className="App">
      {/* temporary image to give the idea of the site being part of the website */}
      <img
        className={imageVisibility}
        src="https://puu.sh/J7zIq/efe0cf5dad.png"
        alt=""
      />
      <Header />
      <main>
        <Categories
          dayData={dayData}
          updateWeekNumber={updateWeekNumber}
          handleClick={handleClick}
          weekendButtonClick={weekendButtonClick}
        />
        <MainOrganiser
          mainOrganiserClass={mainOrganiserClass}
          listData={dayData[dayId]}
          weekendCheck={weekendCheck}
          weekendListData={dayData}
          weekendClick={weekendAddClick}
          weekendListDelete={weekendDelete}
          updateStarRating={updateStarRating}
          updateCompletedTask={updateCompletedTask}
          updateTaskComment={updateTaskComment}
        />
      </main>
    </div>
  );
}

export default Main;
