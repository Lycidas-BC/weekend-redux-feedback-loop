import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

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

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return (
    value === 0 ? "💀" :
    value === 1 ? "🤮" :
    value === 5 ? "🖕" :
    value < 10 ? "💩" :
    value === 10 ? "🤖" :
    value < 20 ? "😭" :
    value === 25 ? "👎" :
    value < 30 ? "😢" :
    value === 38 ? "🤦" :
    value < 40 ? "🙁" :
    value === 42 ? "🥴" :
    value === 48 ? "🥸" :
    value === 49 ? "🤷" :
    value < 50 ? "😕" :
    value === 50 ? "😐" :
    value === 52 ? "🤡" :
    value < 60 ? "👌" :
    value === 68 ? "👻" :
    value === 69 ? "🍆" :
    value < 70 ? "🙂" :
    value === 70 ? "🤠" :
    value === 75 ? "👍" :
    value < 80 ? "😊" :
    value === 85 ? "👽" :
    value < 90 ? "😃" :
    value === 99 ? "🧑‍💻" :
    value === 100 ? "🧘" :
    "😁"
  );
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
