import "./Screen02_Understanding.css";
import DiscreteSlider from "../Slider/Slider";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


function Screen02_Understanding() {
  const history = useHistory();
  const dispatch = useDispatch();
  let understandingDefault = useSelector((store) => store.understanding);
  if (understandingDefault === null) {
    understandingDefault = 50;
  }
  const [understandingInput, setUnderstandingInput] = useState(understandingDefault.length === 0 ? 50 : understandingDefault);

  const handleSubmit = () => {
    dispatch({
      type: "understanding",
      payload: understandingInput,
    });
    history.push('/screen3_support');
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
            <DiscreteSlider 
              sliderValue = {understandingInput}
              setSliderValue = {setUnderstandingInput}
              >
            </DiscreteSlider>
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