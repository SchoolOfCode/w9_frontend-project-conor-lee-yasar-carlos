import "./App.css";
import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Main/Main";

function App() {
  const [imageVisibility, setImageVisibility] = useState("")
  const [logIn, setLogIn] = useState("Log In");

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
