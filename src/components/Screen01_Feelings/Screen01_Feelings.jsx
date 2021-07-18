import "./Screen01_Feelings.css";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


function Screen01_Feelings() {
  const history = useHistory();
  const dispatch = useDispatch();
  const feelingsDefault = useSelector((store) => store.feelings);
  const [feelingInput, setFeelingInput] = useState(feelingsDefault.length === 0 ? "" : feelingsDefault);

  //Can I borrow a feeling?
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
    const isValid = validateInput(feelingInput);

    if (isValid === "valid") {
      dispatch({
        type: "feelings",
        payload: feelingInput,
      });
      history.push('/screen2_understanding');
    } else {
      alert(`Feelings invalid. ${isValid} Try again.`);
    }
  } //end handleSubmit

  return (
      <div>
        <section>
          <h1><img src = {'images/goat_small.jpg'}></img>  Feedback <img src = {'images/goat_small.jpg'}></img></h1>
        </section>
        <section>
        <form onSubmit={handleSubmit}>
          <div><label>How are you feeling today?</label></div>
          <div>
            <input
              placeholder="Enter a number up to 5"
              value={feelingInput}
              onChange={(evt) => setFeelingInput(evt.target.value)}
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

export default Screen01_Feelings;