// Pass today's date and weather information to Calendar using JSX attributes.

import React from "react";
import ReactDOM from "react-dom";

const Calendar = (props) => {
 return (
  <div>
    <h3>
        Today's date is: {props.date}
    </h3>
        <ul>
            <li>
            <i>Weather condition:</i> {props.weather}
            </li>
            <li>
            <i>Current Temperature:</i>  {props.currentTemp} Celcius
            </li>
        </ul>
  </div>
 );
}

ReactDOM.render(
 <Calendar 
    date="Jan 3"     
    weather="Sunny"  
    currentTemp="27" 
/>,
 document.getElementById("root")
);