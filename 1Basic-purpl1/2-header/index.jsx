import React from "react";
import ReactDOM from "react-dom";

const header = (
  <div>
    <h2>New Hot Summer Sale!</h2>
    <ul>
        <li>New Deals!</li>
        <li>Top Sellers!</li>
    </ul>
  </div>
);

ReactDOM.render(
 header,
 document.getElementById("root")
);