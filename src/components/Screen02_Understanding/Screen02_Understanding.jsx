import "./Screen02_Understanding.css";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


function Screen02_Understanding() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [understandingInput, setUnderstandingInput] = useState("");
  const [validInput, setValidInput] = useState(false);


  const handleInput = (eventType, understanding) => {
    // make sure key press wasn't a backspace
    if (eventType.toLowerCase().search("delete") >=0 ){
      setUnderstandingInput("");
    } else {
      // make sure input is a number
      if (!isNaN(understanding) && !isNaN(parseFloat(understanding))) {
        if (Number(understanding) >= 0 && Number(understanding) <= 5) {
          setUnderstandingInput(understanding);
          setValidInput(true);
        } else {
          setValidInput(false);
          alert("Please make sure your number is in range.");
        }
      } else {
        setValidInput(false);
        alert("Please enter a number.");
      }
    }
  } //end handleInput

  const handleSubmit = () =>{
    // event.preventDefault();

    if (validInput) {
      dispatch({
        type: "understanding",
        payload: understandingInput,
      });
      history.push('/screen3_support');
    } else {
      alert("Understanding is a required field.")
    }
  } //end handleSubmit

  return (
      <div>
        <section>
          <h1><img src = {'images/goat_small.jpg'}></img> Understanding <img src = {'images/goat_small.jpg'}></img></h1>
        </section>
        <section>
        <form onSubmit={handleSubmit}>
          <div><label>How are you understanding the content today?</label></div>
          <div>
            <input
              placeholder="Enter a number up to 5"
              value={understandingInput}
              onChange={(evt) => handleInput(evt.nativeEvent.inputType, evt.target.value)}
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

export default Screen02_Understanding;