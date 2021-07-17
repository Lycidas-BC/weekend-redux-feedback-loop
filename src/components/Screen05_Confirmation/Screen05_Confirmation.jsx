import "./Screen05_Confirmation.css";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";


function Screen05_Confirmation() {
  return (
      <div>
        <h1><img src = {'images/goat_small.jpg'}></img> confirmation <img src = {'images/goat_small.jpg'}></img></h1>
      </div>
  );
}

export default Screen05_Confirmation;