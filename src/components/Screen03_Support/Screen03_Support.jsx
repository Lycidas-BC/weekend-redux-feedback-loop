import "./Screen03_Support.css";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


function Screen03_Support() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [supportInput, setSupportInput] = useState("");
  const [validInput, setValidInput] = useState(false);


  const handleInput = (eventType, support) => {
    // make sure key press wasn't a backspace
    if (eventType.toLowerCase().search("delete") >=0 ){
      setSupportInput("");
    } else {
      // make sure input is a number
      if (!isNaN(support) && !isNaN(parseFloat(support))) {
        if (Number(support) >= 0 && Number(support) <= 5) {
          setSupportInput(support);
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

    dispatch({
      type: "support",
      payload: supportInput,
    });
    history.push('/screen4_comments');
  } //end handleSubmit

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

export default Screen03_Support;