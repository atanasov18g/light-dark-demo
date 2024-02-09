import React from "react"
import './App.css';
import NavbarReact from "./components/Navbar.js";
import ListFacts from "./components/List.js";

function App() {
  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }


  return (
    <div className={darkMode ? "App--dark" : "App"}>
      <NavbarReact
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <ListFacts darkMode={darkMode} />
    </div>
  );
}

export default App;
