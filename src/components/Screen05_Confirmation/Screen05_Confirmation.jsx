import "./Screen05_Confirmation.css";
import React from "react";
import axios from 'axios';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


function Screen05_Confirmation() {
  const history = useHistory();
  //grab variables from store
  const feelings = useSelector((store) => store.feelings);
  const understanding = useSelector((store) => store.understanding);
  const support = useSelector((store) => store.support);
  const comments = useSelector((store) => store.comments);
  

  const handleSubmit = () => {
    axios({
      method: "POST",
      url: "/api/feedback",
      data: {
        feeling: feelings,
        understanding: understanding,
        support: support,
        comment: comments
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("this is a Post error", err);
      });
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