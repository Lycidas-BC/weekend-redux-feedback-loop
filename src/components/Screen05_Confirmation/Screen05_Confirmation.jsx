import "./Screen05_Confirmation.css";
import React from "react";
import axios from 'axios';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import sliderLabel from '../sliderLabel/sliderLabel';


function Screen05_Confirmation() {
  const history = useHistory();
  const dispatch = useDispatch();
  //grab variables from store
  const feelings = useSelector((store) => store.feelings);
  const understanding = useSelector((store) => store.understanding);
  const support = useSelector((store) => store.support);
  const comments = useSelector((store) => store.comments);
  const [validInputs, setValidInputs] = useState("");

  
  const validateInput = (input) => {
    if (!isNaN(input) && !isNaN(parseFloat(input))) {
      if (Number(input) >= 0 && Number(input) <= 100) {
        return "valid";
      } else {
        return "Number out of range.";
    }
   } else {
      return "Not a Number.";
    }
  } //end validateInput

  const handleSubmit = () => {

    const feelingsValid = validateInput(feelings);
    const understandingValid = validateInput(understanding);
    const supportValid = validateInput(support);

    if (feelingsValid === "valid" && understandingValid === "valid" && supportValid === "valid") {
      //add to db
      console.log('feelings:', feelings, 'understanding:', understanding, 'support:', support, 'comment:', comments);
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
      //clear store
      dispatch({
        type: "feelings",
        payload: "",
      });
      dispatch({
        type: "understanding",
        payload: "",
      });
      dispatch({
        type: "support",
        payload: "",
      });
      dispatch({
        type: "comments",
        payload: "",
      });
      //return to home screen
      history.push('/');
    } else {
      //Not sure it's possible to end up in this case, but just to be safe
      setValidInputs(`
      feelings: ${feelingsValid}
      understanding: ${understandingValid}
      support: ${supportValid}
      Something went wrong. Please edit your inputs and try again.
      `);
    }
  }
  
  const handlePrevious = () => {
    history.push('/screen4_comments');
  } //end handlePrevious

  return (
      <div>
        <h1><img src = {'images/goat_small.jpg'} alt="goat"></img> confirmation <img src = {'images/goat_small.jpg'} alt="goat"></img></h1>
        <form onSubmit={handleSubmit}>
          <p>
            Feelings: {`${sliderLabel(feelings)} (${feelings})`} 
          </p>
          <p>
            Understanding: {`${sliderLabel(understanding)} (${understanding})`}
          </p>
          <p>
            Support: {`${sliderLabel(support)} (${support})`}
          </p>
          <p>
            Comments: {comments}
          </p>
         <div className="inlineButtons">
            <button type="button" onClick={(evt) => handlePrevious()}>
              PREVIOUS
            </button>
          </div>
          <button type="submit" value="submit">
            Submit
          </button>
        </form>
        <h5 className="validityWarning">{validInputs}</h5>
      </div>
  );
}

export default Screen05_Confirmation;