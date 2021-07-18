import "./Screen04_Comments.css";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


function Screen04_Comments() {
  const history = useHistory();
  const dispatch = useDispatch();
  const commentsDefault = useSelector((store) => store.comments);
  const [commentsInput, setCommentsInput] = useState(commentsDefault.length === 0 ? "" : commentsDefault);

  const handleSubmit = () =>{
    // event.preventDefault();
    dispatch({
      type: "comments",
      payload: commentsInput,
    });
    history.push('/screen5_confirmation');
  } //end handleSubmit

  const handlePrevious = () => {
    dispatch({
      type: "comments",
      payload: commentsInput,
    });
    history.push('/screen3_support');
  } //end handlePrevious

  return (
      <div>
        <section>
          <h1><img src = {'images/goat_small.jpg'} alt="goat"></img> Comments <img src = {'images/goat_small.jpg'} alt="goat"></img></h1>
        </section>
        <section>
        <form onSubmit={handleSubmit}>
          <div><label>Any comments you want to leave?</label></div>
          <div>
            <textarea
              className={"input"}
              placeholder="Let us know your thoughts"
              value={commentsInput}
              onChange={(evt) => setCommentsInput(evt.target.value)}
            ></textarea>
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

export default Screen04_Comments;