import "./Screen06_ThankYou.css";
import React from "react";
import { useHistory } from 'react-router-dom';


function Screen06_ThankYou() {
  const history = useHistory();

  const handleSubmit = () => {
    //return to home screen
    history.push('/');
  }

  return (
      <div>
        <h1><img src = {'images/goat_small.jpg'} alt="goat"></img> Thank You <img src = {'images/goat_small.jpg'} alt="goat"></img></h1>
        <form onSubmit={handleSubmit}>
          <h4>Thanks for the feedback! </h4>
          <button type="submit" value="submit">
            Fill out another feedback form?
          </button>
        </form>
      </div>
  );
}

export default Screen06_ThankYou;