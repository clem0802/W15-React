import React from "react";
import ReactDOM from "react-dom";

// Make use of an embedded expression to render Hello followed by defaultName
const defaultName = "clems";
const content = (
  <h1>Hello {defaultName}</h1> // EMBEDDED EXPRESSION
);

ReactDOM.render(
 content,
 document.getElementById("root")
);

export default content;
export { defaultName }