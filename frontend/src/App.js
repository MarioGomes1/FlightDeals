import "./App.css";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import React from "react";
import Card from "./components/Card/Card";
import FlightList from "./components/FlightList/FlightList";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainContent />}></Route>
          <Route
            path="/test/:from/:to/:start/:end"
            element={<FlightList />}
          ></Route>
        </Routes>
        <Header />
        {/* <Card /> */}
      </Router>
    </React.Fragment>
    //   <main>
    //     <Container>
    //       <Routes>
    //         <Route path="/" component={<HomePage />} exact></Route>
    //       </Routes>
    //     </Container>
    //   </main>
    //   <Footer />
    // </Router>
  );
}

export default App;
