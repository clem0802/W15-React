// We mentioned that Class Components hold information that can change over time. 
// We call that information "STATE"
// Let's look at what happens when a component's state changes 
// and how we can make it change in our apps.
/*-----------------------------------*/
// In React, a change in a component's state tells the browser to re-render (or recreate) that component, 
// this time with updated values.
// This lets React change a page's content on the go "WITHOUT RELOADING the entire page".

/*-----------------------------------*/
// To use state, you need a class component with a constructor.
// (1) As a first step, declare this.state = { count: 0 } inside the constructor.
// this.state is a JavaScript object that lets you track and use multiple values.
// (2) We can access "this.state.count" inside of render() and display its current value, 0.
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
 constructor(props) { // in CONSTRUCTOR() => we "initialize" STATE within a Class Component
  super(props);
  this.state = { count:0 }; //(1)
 }

// If we want to change the state object's values, 
// we need to add a special function called componentDidMount() inside App.
// (3) "componentDidMount()" is a component-specific function that is called after a component loads.
// (4) To update values, we call "this.setState()" and specify the values we want to change inside braces {}.
// (5) Code {count: 1} to make count update from 0 to 1 right after the component renders.
componentDidMount(){ //(3)
    this.setState( //(4)
        {count:1} //(5)
    )
}

// Since React only calls componentDidMount() after a component loads, 
// we also need a way to change the state "after" it loads.
// (6) We'll use "update methods" to do that.
// Since we want updateCount() to make a visible change every time we call the function, 
// we'll make it always add 1 to the current count.
// (7) Code this.setState, and set (8) count to this.state.count + 1.
updateCount = () => { //(6)
    this.setState({ //(7) => it alters the STATE of a component
        count:this.state.count+1 //(8)
    });
}

// We can then link the update method to an element like a button to call this.setState() at any time.
// (9) Code {this.updateCount} as an embedded expression inside the onClick attribute.
render() {
  return ( //(2) <p></p>
           //(9) <button></button>
   <div>
        <h1>Hello</h1>
        <p>Our count is currently "{this.state.count}"</p> 
        <button onClick="{this.updateCount}">Click me</button>
   </div>
  );
 }
}

ReactDOM.render(
 <App />,
 document.getElementById("root")
);