import './App.css';
import { useState } from "react"
import NavBar from './Componants/Nav-bar';
import Categories from './Componants/Catergories';
import Todo from './Componants/Todo-list';
import Dropdown from './Componants/Catergories/Dropdown';

function App() {
  const [toDoClass, setToDoClass] = useState("default-invis");
  const [resourcesClass, setResourcesClass] = useState("default-invis");
  const [dayId, setDayId] = useState(0);
  const [input, setInput] = useState("Week 1");

  const [dayButton, setDayButton] = useState([{day: 1, text: [{id: 1, content: "Day 1 test"},{id: 2, content: "Day 1 again"},{id: 2, content: "Day 1 x3"}]}, {day: 2, text: [{id: 1, content: "Day 2 content"},{id: 2, content: "Day 2 Test again"}]}, {day: 3, text: "test3"}, {day: 4, text: "test4"}, {day: 5, text: "test5"}])

  function handleClick(e) {
    setDayId(e.target.id - 1)
    setToDoClass("todo-container")
    setResourcesClass("resources-container")
  }


  return (
    <div className="App">
      <NavBar />
      <h1>Bootcamper Organiser</h1>
      <div className='title-underline'></div>
      <main>
      <div className='categories'>
          <Dropdown  input={input} setInput={setInput}/>
          <div className='categories-map'>
          {dayButton.map((input) => {
            return <Categories id={input.day} dayButton={input.day} text={input.text} handleClick={handleClick}/>
          })}
          </div>
      </div>
       <Todo toDoClass={toDoClass} resourceClass={resourcesClass} data={dayButton[dayId].text}/>
      </main>
    </div>
  );
}

export default App;
