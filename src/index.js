import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import Homes from "./Homes";
 
ReactDOM.render(
  <>
  <BrowserRouter>
    <App />

  {/* <Homes /> */}
  </BrowserRouter>
  </>,document.querySelector("#root")
);
