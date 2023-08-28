import React from "react";
import Navbar from "./components/Navbar/navbar";
import About from "./components/pages/about";
import Home from "./components/pages/home";


function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break
      case "/about":
        component = <About />;
        break
  }
  return (
    <>
      <Navbar />
      <div id="container">{component}</div>
    </>
  );
}

export default App;
