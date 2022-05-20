// We can apply CSS in React via inline styling or CSS stylesheets. 
// Inline styling requires camelCase syntax for CSS properties.
// For example, a CSS property like margin-left will be written as marginLeft inside inline styling.
// => STYLE {}
// -height, width 
// -marginLeft, marginRight
// -paddingTop, paddingBottom
// -color, backgroundColor 
// -display, justifyContent, alignItems 
// -borderRadius, fontWeight....

/*----------------------------------*/
// One way to apply styling is to use a style attribute with JSX elements, similar to inline styling in HTML.
// Below, add  =>  style={} inside of the <h1> tag.
// Below, underline the app's header by adding  =>  { textDecoration:"underline" } to style.

import React from "react";
import ReactDOM from "react-dom";

const App = () => {
 return (
  <div>
   <h1 style={
       { textDecoration:"underline" }
   }>Styling in React</h1>
   <p>This is normal text.</p>
  </div>
 );
}

ReactDOM.render(
 <App />,
 document.getElementById('root')
);