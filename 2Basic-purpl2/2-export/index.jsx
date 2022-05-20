// Store the HTML code in render() into a variable named content
// Replace the p with a h1
// Replace the HTML code in render() with the content variable.

/*-------------------------------------*/
// import React from "react";
// import ReactDOM from "react-dom";


// ReactDOM.render(
//   <p>My first React content!</p>,
//   document.getElementById("root")
// );

// export default content;

/*-------------------------------------*/
import React from "react";
import ReactDOM from "react-dom";

const content = (
  <div>
    <h1>My first React content!</h1>
  </div>
);

ReactDOM.render(
  content,
  document.getElementById("root")
);

export default content;