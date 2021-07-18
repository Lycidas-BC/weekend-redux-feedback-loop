import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Imports
import { applyMiddleware, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";


//feelings reducer
const feelings = (state = [], action) => {
    if (action.type === 'feelings') {
      return action.payload;
    }
    return state;
  };

//understanding reducer
const understanding = (state = [], action) => {
if (action.type === 'understanding') {
    return action.payload;
}
return state;
};

//support reducer
const support = (state = [], action) => {
if (action.type === 'support') {
    return action.payload;
}
return state;
};

//comments reducer
const comments = (state = [], action) => {
if (action.type === 'comments') {
    return action.payload;
}
return state;
};

// Store goes here
const storeInstance = createStore(
    combineReducers({
      //  Reducers go here
      feelings,
      understanding,
      support,
      comments
    }),
    applyMiddleware(logger)
  );
  
  // Provider added to ReactDOM
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={storeInstance}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
    registerServiceWorker();