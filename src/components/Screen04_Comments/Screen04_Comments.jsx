import "./Screen04_Comments.css";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";


function Screen04_Comments() {
  return (
      <div>
        <h1><img src = {'images/goat_small.jpg'}></img> comments <img src = {'images/goat_small.jpg'}></img></h1>
      </div>
  );
}

export default Screen04_Comments;