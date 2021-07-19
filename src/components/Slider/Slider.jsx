import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import sliderLabel from '../sliderLabel/sliderLabel';

const useStyles = makeStyles({
  root: {
    margin: "auto",
    width: "50%",
    border: "3px solid green",
    paddingLeft: "70px",
    paddingRight: "70px",
    paddingTop: "50px",
    paddingBottom: "30px"
  },
});

function valueLabelFormat(value) {
  return (sliderLabel(value));
}

function valuetext(value) {
  return `${value}`;
}


export default function DiscreteSlider({marks, sliderValue, setSliderValue}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={sliderValue}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        step={1}
        valueLabelDisplay="auto"
        marks={marks}
        onChangeCommitted={event => setSliderValue(event.toElement.ariaValueNow)}
      />
    </div>
  );
}
