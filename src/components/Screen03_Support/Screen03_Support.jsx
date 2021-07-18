import "./Screen03_Support.css";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


function Screen03_Support() {
  const history = useHistory();
  const dispatch = useDispatch();
  const supportDefault = useSelector((store) => store.support);
  const [supportInput, setSupportInput] = useState(supportDefault.length === 0 ? "" : supportDefault);
  
  const validateInput = (input) => {
    if (!isNaN(input) && !isNaN(parseFloat(input))) {
      if (Number(input) >= 0 && Number(input) <= 5) {
        return "valid";
      } else {
        return "Number out of range.";
    }
   } else {
      return "Not a Number.";
    }
  } //end validateInput

  const handleSubmit = () =>{
    // event.preventDefault();
    const isValid = validateInput(supportInput);

    if (isValid === "valid") {
      dispatch({
        type: "support",
        payload: supportInput,
      });
      history.push('/screen4_comments');
    } else {
      alert(isValid);
    }
  } //end handleSubmit

  const handlePrevious = () => {
    dispatch({
      type: "support",
      payload: supportInput,
    });
    history.push('/screen2_understanding');
  } //end handlePrevious

  return (
      <div>
        <section>
          <h1><img src = {'images/goat_small.jpg'}></img> Support <img src = {'images/goat_small.jpg'}></img></h1>
        </section>
        <section>
        <form onSubmit={handleSubmit}>
          <div><label>How well are you being supported today?</label></div>
          <div>
            <input
              placeholder="Enter a number up to 5"
              value={supportInput}
              onChange={(evt) => setSupportInput(evt.target.value)}
            />
          </div>
          <div className="inlineButtons">
            <button type="button" onClick={(evt) => handlePrevious()}>
              PREVIOUS
            </button>
          </div>
          <div className="inlineButtons">
            <button type="submit" value="submit">
              NEXT
            </button>
          </div>
        </form>
        </section>
      </div>
  );
}

export default Screen03_Support;