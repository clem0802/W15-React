import React from "react";
import ReactDOM from "react-dom";

const name = (
  <strong>Peter Parker</strong>
);
const dob = (
  <i>Aug 31, 2001</i>
);

ReactDOM.render(
 <div>
  <h1>Profile</h1>
  <ul>
    <li>Name: {name}</li>  
    <li>Date born: {dob}</li>
  </ul>
 </div>,
 document.getElementById("root")
);