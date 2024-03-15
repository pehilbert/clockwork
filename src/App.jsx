import { useState } from 'react'
import Header from "./components/Header";
import DayContainer from "./components/DayContainer";

import "./App.css";

function App() {
  return <div className = "App">
    <Header />
    <div className = "widgets">
      <DayContainer />
      <DayContainer />
    </div>
  </div>;
}

export default App;
