import "./Screen01_Feelings.css";
import DiscreteSlider from "../Slider/Slider";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


function Screen01_Feelings() {
  const history = useHistory();
  const dispatch = useDispatch();
  const feelingsDefault = useSelector((store) => store.feelings);
  const [feelingInput, setFeelingInput] = useState(feelingsDefault.length === 0 ? 50 : feelingsDefault);

  //Can I borrow a feeling?
  const handleSubmit = () =>{
    dispatch({
      type: "feelings",
      payload: feelingInput,
    });
    history.push('/screen2_understanding');
  } //end handleSubmit

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