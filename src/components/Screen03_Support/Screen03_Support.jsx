import "./Screen03_Support.css";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";


function Screen03_Support() {
  return (
      <div>
        <h1><img src = {'images/goat_small.jpg'}></img> support <img src = {'images/goat_small.jpg'}></img></h1>
      </div>
  );
}

export default Screen03_Support;