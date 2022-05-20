// Add the correct pieces of code 
// with attributes and props to render a Click me! button properly.

import React from "react";
import ReactDOM from "react-dom";

const CustomButton = (props) => {
 return (
  <button>
   {props.text}
  </button>
 );
}

ReactDOM.render(
 <CustomButton text="Click me!" />,
 document.getElementById("button")
);