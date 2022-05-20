import React from "react";
import ReactDOM from "react-dom";
// We can also use CSS stylesheets to style React components.
// Below, add  [import "./App.css"]  to apply the CSS from App.css to App.
import "./App.css";


// Generic selectors (ex. p, div) will apply CSS to all elements in an app.
// We can use className and CSS classes to target specific elements.
// Below, the class .container has some styling. 
// Add  [className="container"]  to the <div> element to apply said styling.
// Stylize the <img /> element by adding {width:"100%"} inside of style={}.
// pic n°8770 first <p> 
// pic n°8771 <div className="container"> 
// pic n°8772 <img /> 
const App = () => {
 return (
    <div className="container">
            <h1>Styling in React</h1>
            <p>I should be lightblue-colored text.</p>
            <img style={{width:"100%"}} src="https://mimo.app/i/flatiron.png" alt="Flatiron" />
            <p>"[One] of the world's most iconic skyscrapers and a quintessential symbol of New York City" 
                - WLIW21 company.
            </p>
    </div>
 );
}

ReactDOM.render(
 <App />,
 document.getElementById('root')
);