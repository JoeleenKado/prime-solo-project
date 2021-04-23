import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./redux/reducers/_root.reducer"; // imports ./redux/reducers/index.js
import rootSaga from "./redux/sagas/_root.saga"; // imports ./redux/sagas/index.js
import App from "./components/App/App";
import Filestack from 'react-filestack'


import { render } from 'react-dom'; 
//  import filestack from 'filestack-js'; 
// import Container from 'components/Container'; 
// import '../dist/css/style.css'; 

//styling
//import './index.css';

// import filestack from 'filestack-js';

// const client = Filestack.init("A2ocoVhiLQseuc8qsSbygz");

// console.log(`You discovered the Filestack client version! ${Filestack.version}`); 


const sagaMiddleware = createSagaMiddleware();

// this line creates an array of all of redux middleware you want to use
// we don't want a whole ton of console logs in our production code
// logger will only be added to your project if your in development mode
const middlewareList =
  process.env.NODE_ENV === "development"
    ? [sagaMiddleware, logger]
    : [sagaMiddleware];
    
    // if (__DEV__) {
    //   doSomethingDev();
    // } else {
    //   doSomethingProd();
    // }

const store = createStore(
  // tells the saga middleware to use the rootReducer
  // rootSaga contains all of our other reducers
  rootReducer,
  // adds all middleware to our project including saga and logger
  applyMiddleware(...middlewareList)
);

// tells the saga middleware to use the rootSaga
// rootSaga contains all of our other sagas
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("react-root")
);
