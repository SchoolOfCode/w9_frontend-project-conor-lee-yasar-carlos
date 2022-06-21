import './App.css';
import { useState } from "react"
import NavBar from './Componants/Nav-bar';
import Categories from './Componants/Catergories';
import Todo from './Componants/Todo-list';

function App() {
  const [toDoClass, setToDoClass] = useState("default-invis");
  const [resourcesClass, setResourcesClass] = useState("default-invis");

  const [dayButton, setDayButton] = useState([{day: 1, text: "test"}, {day: 2, text: "test2"}, {day: 3, text: "test3"}, {day: 4, text: "test4"}, {day: 5, text: "test5"}])

  function handleClick() {
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
          <input  type="text" />
          <div className='categories-map'>
          {dayButton.map((input) => {
            return <Categories testButton={input.day} text={input.text} handleClick={handleClick}/>
          })}
          </div>
      </div>
       <Todo toDoClass={toDoClass} resourceClass={resourcesClass}/>
      </main>
    </div>
  );
}

export default App;
