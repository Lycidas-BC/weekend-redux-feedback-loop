import "./Screen05_Confirmation.css";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';


function Screen05_Confirmation() {
  const history = useHistory();
  // const dispatch = useDispatch();

  const handleSubmit = () => {

    // axios
    history.push('/');
  }
  
  return (
      <div>
        <h1><img src = {'images/goat_small.jpg'}></img> confirmation <img src = {'images/goat_small.jpg'}></img></h1>
        <form onSubmit={handleSubmit}>
          <button type="submit" value="submit">
            Submit
          </button>
        </form>
      </div>
  );
}

export default Screen05_Confirmation;