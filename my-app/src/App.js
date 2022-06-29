import "./App.css";
import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Main/Main";

// Renders NavBar and Main components and hands down props needed

function App() {
  const [imageVisibility, setImageVisibility] = useState("")
  const [logIn, setLogIn] = useState("Log In");

  // Toggles the main webpage image on user log in which takes the user to the main organiser
  function hideImage() {
    if (logIn === "Log Out") {
      setImageVisibility("")
      setLogIn("Log In")
    } else {
    setImageVisibility("image-visibility")
    setLogIn("Log Out")
    }
  }
  
  return (
    <div className="App">
    <NavBar logIn={logIn} hideImage={hideImage}/>
    <Main imageVisibility={imageVisibility}/>
    </div>
  );
}

export default App;
