import "./Screen03_Support.css";
import DiscreteSlider from "../Slider/Slider";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


function Screen03_Support() {
  const history = useHistory();
  const dispatch = useDispatch();
  let supportDefault = useSelector((store) => store.support);
  if (supportDefault === null) {
    supportDefault = 50;
  }
  const [supportInput, setSupportInput] = useState(supportDefault.length === 0 ? 50 : supportDefault);
  
  const handleSubmit = () =>{
    dispatch({
      type: "support",
      payload: supportInput,
    });
    history.push('/screen4_comments');
  } //end handleSubmit

  const handlePrevious = () => {
    dispatch({
      type: "SUPPORT",
      payload: supportInput,
    });
    history.push('/screen2_understanding');
  } //end handlePrevious

  const marks = [
    {
      value: 0,
      label: `abandoned`,
    },
    {
      value: 25,
      label: `unsupported`,
    },
    {
      value: 50,
      label: `coulda been better`,
    },
    {
      value: 75,
      label: `supported`,
    },
    {
      value: 100,
      label: `above and beyond`,
    }
  ];

  return (
      <div>
        <section>
          <h1><img src = {'images/goat_small.jpg'} alt="goat"></img> Support <img src = {'images/goat_small.jpg'} alt="goat"></img></h1>
        </section>
        <section>
        <form onSubmit={handleSubmit}>
          <div><label>How well are you being supported today?</label></div>
          <div>
            <DiscreteSlider 
              marks = {marks}
              sliderValue = {supportInput}
              setSliderValue = {setSupportInput}
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

export default Screen03_Support;