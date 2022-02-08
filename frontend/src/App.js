import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import React from "react";
import FlightList from "./components/FlightList/FlightList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainContent />}></Route>
          <Route
            path="/test/:from/:to/:start/:end"
            element={<FlightList />}
          ></Route>
        </Routes>
        <Header />
      </Router>
    </div>
  );
}

export default App;
