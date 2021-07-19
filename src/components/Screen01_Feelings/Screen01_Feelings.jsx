import "./Screen01_Feelings.css";
import DiscreteSlider from "../Slider/Slider";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


function Screen01_Feelings() {
  const history = useHistory();
  const dispatch = useDispatch();
  let feelingsDefault = useSelector((store) => store.feelings);
  if (feelingsDefault === null) {
    //sometimes, the slider doesn't catch the input and returns null - if this happens, set it to default value
    feelingsDefault = 50;
  }
  const [feelingInput, setFeelingInput] = useState(feelingsDefault.length === 0 ? 50 : feelingsDefault);

  //Can I borrow a feeling?
  const handleSubmit = () =>{
    dispatch({
      type: "FEELINGS",
      payload: feelingInput,
    });
    history.push('/screen2_understanding');
  } //end handleSubmit

  const marks = [
    {
      value: 0,
      label: `very sad`,
    },
    {
      value: 25,
      label: `sad`,
    },
    {
      value: 50,
      label: `neutral`,
    },
    {
      value: 75,
      label: `happy`,
    },
    {
      value: 100,
      label: `very happy`,
    }
  ];

  return (
      <div>
        <section>
          <h1><img src = {'images/goat_small.jpg'} alt="goat"></img>  Feedback <img src = {'images/goat_small.jpg'} alt="goat"></img></h1>
        </section>
        <section>
        <form onSubmit={handleSubmit}>
          <div><label>How are you feeling today?</label></div>
          <div>
            <DiscreteSlider 
              marks = {marks}
              sliderValue = {feelingInput}
              setSliderValue = {setFeelingInput}
              >
            </DiscreteSlider>
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