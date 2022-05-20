// In the index.jsx file, import the React library.
// Still in the same file, import the ReactDOM library.
import React from "react";
import ReactDOM from "react-dom";

/*----------------------------------*/
// Above App, add a const named Heading. Set it to an ES6 arrow function which will return JSX below.
// JSX   <h1>Hello, my name is Sarah</h1>
// Inside App, replace the <h1>Hello</h1> with a component we'll soon create called <Heading />.

/*----------------------------------*/
// Replace the name inside the Heading constant with a span element containing the correct prop 
// so that the name gets displayed.. (inside <h1></h1>) =>  <span>{props.name}</span>
/*----------------------------------*/
// In the App component, update the Heading component 
// so that it accepts the name prop with the value of Sarah Smith. =>  name="Sarah Smith"
const Heading = (props) => {
    return(
        <h1>Hello, my name is <span>{props.name}</span></h1>
    )
}

/*----------------------------------------------------------------------*/
const Hobbies = (props) => {
    return (
     <div>
      <h2>My hobbies:</h2>
      <ol>
       <li>My favorite hobby is {props.best}</li>
       <li>My second-favorite hobby is {props.outdoor}</li>
       <li>I also like {props.indoor}</li>
      </ol>
     </div>
    )
}

/*----------------------------------------------------------------------*/
// Inside the Contact component, add another prop =>  <button>{props.callToAction}</button>
// name it callToAction and wrap it inside the button element.
const Contact = (props) => {
    return (
      <div>
         <h3>{props.greeting}</h3>
         <button>{props.callToAction}</button>
      </div>
    )
}

/*----------------------------------------------------------------------*/
const App = () => {
    return (
      <div>
         <Heading name="Sarah Smith" />
         <Hobbies best="Kayaking" outdoor="Running" indoor="Chess" />
         <Contact greeting="Contact me" callToAction="Schedule a meeting" />
      </div>
    );
  }
  
  /*----------------------------------------------------------------------*/
  ReactDOM.render(
   <App />,
   document.getElementById("root")
  );
  
  export default App;
  export { Heading, Hobbies, Contact };
