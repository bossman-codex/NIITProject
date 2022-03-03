import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import { AmazonContextProvider } from './components/Context/AmazonContext';

ReactDOM.render(

    <AmazonContextProvider>
          <App /> 
    </AmazonContextProvider>
 
    
    , document.getElementById("root"));
