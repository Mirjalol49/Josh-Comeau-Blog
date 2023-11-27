import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Menu from "./Components/MainSection/Menu";
import Footer from "./Components/Footer/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <Header toggleDarkMode={toggleDarkMode} />
      <Menu darkMode={darkMode} />
      <Footer />
    </div>
  );
}

export default App;
