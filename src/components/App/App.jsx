import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';
import Screen00Admin from "../Screen00_Admin/Screen00_Admin";
import Screen01Feelings from "../Screen01_Feelings/Screen01_Feelings";
import Screen02Understanding from "../Screen02_Understanding/Screen02_Understanding";
import Screen03Support from "../Screen03_Support/Screen03_Support";
import Screen04Comments from "../Screen04_Comments/Screen04_Comments";
import Screen05Confirmation from "../Screen05_Confirmation/Screen05_Confirmation";

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
          <section>
            <Route path="/admin" exact>
              <Screen00Admin />
            </Route>
            <Route path="/" exact>
              <Screen01Feelings />
            </Route>
            <Route path="/screen2_understanding" exact>
              <Screen02Understanding />
            </Route>
            <Route path="/screen3_support" exact>
              <Screen03Support />
            </Route>
            <Route path="/screen4_comments" exact>
              <Screen04Comments />
            </Route>
            <Route path="/screen5_confirmation" exact>
              <Screen05Confirmation />
            </Route>
          </section>
      </div>
    </Router>
  );
}

export default App;
