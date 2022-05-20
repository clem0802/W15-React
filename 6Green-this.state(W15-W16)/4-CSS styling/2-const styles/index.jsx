import React from "react";
import ReactDOM from "react-dom";


// Within our paragraph Object, we can define some new styling.
// Add color: "blue" and fontWeight: "bold" to paragraph.
// "style" attributes can be used with variables =>  const styles
const App = () => {

 const styles = { //(a variable)
    header:{
        textDecoration: "underline",
        width: "100%"
    },
    paragraph:{
        color: "blue", // pic n°8769
        fontWeight:"bold"
    }
 }

// Finally, we can apply the styles.paragraph styling to a specific JSX element.
// Set styles.paragraph as the value of the style attribute for <p>.
// pic n°8768
 return (
  <div>
    <h1 style={styles.header}>
        Styling in React
    </h1>
    <p style={styles.paragraph}>
        This is blue-colored text.
    </p>
  </div>
 );
}

ReactDOM.render(
 <App />,
 document.getElementById('root')
);