import "./Screen02_Understanding.css";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";


function Screen02_Understanding() {
  return (
      <div>
        <h1><img src = {'images/goat_small.jpg'}></img> understanding <img src = {'images/goat_small.jpg'}></img></h1>
      </div>
  );
}

export default Screen02_Understanding;