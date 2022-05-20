import React from "react";
import ReactDOM from "react-dom";

const App = (props) => {
 return (
  <div>
   <h1>Did You Know? - Pt. 2</h1>
   <p>The actual longest word is "Pneumonoultramicroscopicsilicovolcanoconiosis", a type of lung disease caused by inhaling ash and silica dust. Scary...</p>
  </div>
 );
}

ReactDOM.render(
 <App />,
 document.getElementById("root")
);