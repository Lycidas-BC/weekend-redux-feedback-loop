import "./Screen01_Feelings.css";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';


function Screen01_Feelings() {
  const history = useHistory();
  // const dispatch = useDispatch();
  const [feelingInput, setFeelingInput] = useState("");
  const [validInput, setValidInput] = useState(false);


  //Can I borrow a feeling?
  const handleInput = (feeling) => {
    // make sure input is a number
    if (!isNaN(feeling) && !isNaN(parseFloat(feeling))) {
      if (Number(feeling) >= 0 && Number(feeling) <= 5) {
        setFeelingInput(feeling);
      } else {
        setValidInput(false);
        alert("Please make sure your number is in range.");
      }
    } else {
      setValidInput(false);
      alert("Please enter a number.");
    }
  }

  const handleSubmit = () =>{
    // event.preventDefault();

    // dispatch({
    //   type: "CUSTOMER_INFO",
    //   payload: customerFormInfo,
    // });
    history.push('/screen2_understanding');
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
              onChange={(evt) => handleInput(evt.target.value)}
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