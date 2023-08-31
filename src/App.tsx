import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/pages/About";
import { Home } from "./components/pages/Home";


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
