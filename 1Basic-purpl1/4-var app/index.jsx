import React from "react";
import ReactDOM from "react-dom";

var name = "Lori Smith";
var url = "https://mimo.app/i/lori.png";


var app = (
 <div>
      <h1>
         Hello, {name}
      </h1>
      <img src={url} alt="Lori's Profile" />
 </div>
);

ReactDOM.render(
 app,
 document.getElementById("root")
);