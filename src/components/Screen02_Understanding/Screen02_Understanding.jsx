import "./Screen02_Understanding.css";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


function Screen02_Understanding() {
  const history = useHistory();
  const dispatch = useDispatch();
  const understandingDefault = useSelector((store) => store.understanding);
  const [understandingInput, setUnderstandingInput] = useState(understandingDefault.length === 0 ? "" : understandingDefault);

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

  const handleSubmit = () => {
    // event.preventDefault();
    const isValid = validateInput(understandingInput);

    if (isValid === "valid") {
      dispatch({
        type: "understanding",
        payload: understandingInput,
      });
      history.push('/screen3_support');
    } else {
      alert(isValid);
    }
  } //end handleSubmit

  const handlePrevious = () => {
    dispatch({
      type: "understanding",
      payload: understandingInput,
    });
    history.push('/');
  } //end handlePrevious

  return (
      <div>
        <section>
          <h1><img src = {'images/goat_small.jpg'} alt="goat"></img> Understanding <img src = {'images/goat_small.jpg'} alt="goat"></img></h1>
        </section>
        <section>
        <form onSubmit={handleSubmit}>
          <div><label>How are you understanding the content today?</label></div>
          <div>
            <input
              placeholder="Enter a number up to 5"
              value={understandingInput}
              onChange={(evt) => setUnderstandingInput(evt.target.value)}
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

export default Screen02_Understanding;