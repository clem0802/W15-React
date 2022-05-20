// React <input /> changes and events work differently than their HTML counterparts. 
// Namely, they're usually coupled with STATE changes.
// In this Skill, we will show how update methods, 
// event handling, and JSX are connected with user interactions.

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            text:"" 
        };
    }

    // Like with JavaScript event handlers, 
    // update methods can access event information through their first argument, 
    // usually named "EVENT" or "E".
    // Below, we prepared handleInput with an "EVENT" argument. 
    // Type "EVENT.TARGET.VALUE" to grab the value of the component's input.
    handleInput = (event) => {
        const val = event.target.value;

        // In React, INPUT values are typically stored inside of STATE !!!
        // This way, input changes will automatically re-render the component.
        // Below, save the input's value inside of the new state value named text.
        this.setState({
            text:val
        })
    }

    // The final step is to render this.state.text so that we can see our value updated on the screen.
    // Below, print this.state.text both as the value of <input /> and inside of the <p> tag. 
    // Type something to see it re-render.
    // =>  value={this.state.text}
    // =>  <p><strong>Your entry is:</strong> {this.state.text}</p>
    // How can a component track whenever someone types into an <input /> element?
    // =>  with onChange and an EVENT HANDLER
    render(){
        return(
            <div>
                <h1>Hello, {this.props.name}</h1>
                <input
                type="text"
                placeholder="Type Here"
                value={this.state.text}
                onChange={this.handleInput}
                />
                <p><strong>Your entry is:</strong> {this.state.text}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <App name="Bobby Barns" />,
    document.getElementById("root")
);