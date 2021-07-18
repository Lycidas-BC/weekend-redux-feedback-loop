import "./Screen00_Admin.css";
import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";


function Screen00_Admin() {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = () => {
    axios({
      method: "GET",
      url: "/api/feedback"
    })
      .then((response) => {
        // console.log(response.data);
        setFeedbackList(response.data);
      })
      .catch((err) => {
        console.log("this is a GET error", err);
      });
  } //end getFeedback

  const deleteFeedbackItem = (feedbackId) => {    
    axios({
      method: "DELETE",
      url: `/api/feedback/${feedbackId}`
    })
      .then((response) => {
        // console.log(response.data);
        getFeedback();
      })
      .catch((err) => {
        console.log("this is a GET error", err);
      });
  } //end deleteFeedbackItem

  return (
    <div>
      <h1>admin</h1>
      <table>
        <thead>
        <tr>
        <th>Feeling</th>
        <th>Understanding</th>
        <th>Support</th>
        <th>Comments</th>
        <th>Delete</th>
        </tr>
        </thead>
       <tbody>
           {feedbackList.map((feedback, index) =>
        <tr key={index}>
          <td>{feedback.feeling}</td>
          <td>{feedback.understanding}</td>
          <td>{feedback.support}</td>
          <td>{feedback.comments}</td>
          <td>
            <button onClick={() => deleteFeedbackItem(feedback.id)}>Delete</button>
          </td>
        </tr>
        )}
        </tbody>
    </table>
    </div>
  );
}

export default Screen00_Admin;