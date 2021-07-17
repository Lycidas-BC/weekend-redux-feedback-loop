import React from 'react';
import axios from 'axios';
import './App.css';
import Screen00_Admin from "../Screen00_Admin/Screen00_Admin";
import Screen01_Feelings from "../Screen01_Feelings/Screen01_Feelings";
import Screen02_Understanding from "../Screen02_Understanding/Screen02_Understanding";
import Screen03_Support from "../Screen03_Support/Screen03_Support";
import Screen04_Comments from "../Screen04_Comments/Screen04_Comments";
import Screen05_Confirmation from "../Screen05_Confirmation/Screen05_Confirmation";

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <body>
        <Screen00_Admin />
        <Screen01_Feelings />
        <Screen02_Understanding />
        <Screen03_Support />
        <Screen04_Comments />
        <Screen05_Confirmation />
      </body>
    </div>
  );
}

export default App;
