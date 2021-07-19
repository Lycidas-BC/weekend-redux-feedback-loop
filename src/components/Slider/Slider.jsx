import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import sliderLabel from '../sliderLabel/sliderLabel';

const useStyles = makeStyles({
  root: {
    margin: "auto",
    width: "50%",
    border: "3px solid green",
    padding: "50px"
  },
});

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

function valueLabelFormat(value) {
  return (sliderLabel(value));
}

function valuetext(value) {
  return `${value}`;
}


export default function DiscreteSlider({sliderValue, setSliderValue}) {
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
