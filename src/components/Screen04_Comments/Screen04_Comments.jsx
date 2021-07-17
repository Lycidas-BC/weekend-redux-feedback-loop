import "./Screen04_Comments.css";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";


function Screen04_Comments() {
  const [commentsInput, setCommentsInput] = useState("");

  const handleSubmit = () =>{

  } //end handleSubmit

  return (
      <div>
        <section>
          <h1><img src = {'images/goat_small.jpg'}></img> Comments <img src = {'images/goat_small.jpg'}></img></h1>
        </section>
        <section>
        <form onSubmit={handleSubmit}>
          <div><label>Any comments you want to leave?</label></div>
          <div>
            <input
              placeholder="Let us know your thoughts"
              value={commentsInput}
              onChange={(evt) => setCommentsInput(evt.target.value)}
            />
          </div>
          <button type="submit" value="submit">
            NEXT
          </button>
        </form>
        </section>
      </div>
  );
}

export default Screen04_Comments;