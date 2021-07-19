
function sliderLabel(value) {
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

  export default sliderLabel;