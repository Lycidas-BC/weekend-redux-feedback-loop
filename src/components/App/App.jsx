import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Screen00_Admin from "../Screen00_Admin/Screen00_Admin";
import Screen01_Feelings from "../Screen01_Feelings/Screen01_Feelings";
import Screen02_Understanding from "../Screen02_Understanding/Screen02_Understanding";
import Screen03_Support from "../Screen03_Support/Screen03_Support";
import Screen04_Comments from "../Screen04_Comments/Screen04_Comments";
import Screen05_Confirmation from "../Screen05_Confirmation/Screen05_Confirmation";

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <body>
          <Route path="/admin" exact>
            <Screen00_Admin />
          </Route>
          <Route path="/" exact>
            <Screen01_Feelings />
          </Route>
          <Route path="/screen2_understanding" exact>
            <Screen02_Understanding />
          </Route>
          <Route path="/screen3_support" exact>
            <Screen03_Support />
          </Route>
          <Route path="/screen4_comments" exact>
            <Screen04_Comments />
          </Route>
          <Route path="/screen5_confirmation" exact>
            <Screen05_Confirmation />
          </Route>
        </body>
      </div>
    </Router>
  );
}

export default App;
