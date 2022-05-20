// Observe the Calendar component. It prints out props.hours inside the <p> element. 
// Add the proper attribute to <Calendar> inside of ReactDOM.render() so that, 
// when <Calendar> is rendered, it prints out an appropriate time for Mr. Finksberg. 
// Mr. Finksberg's availability is up to your choosing.

import React from "react";
import ReactDOM from "react-dom";

export const Calendar = (props) => {
 return (
  <div>
   <h3>Mr. Finksberg's Availability</h3>
   <p>
    <strong>Mon-Fri:</strong> <span>{props.hours}</span>
   </p>
  </div>
 );
}

ReactDOM.render(
 <Calendar  />,
 document.getElementById("root")
);