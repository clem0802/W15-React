// Up until now, we've worked with single-component React apps. 
// However, a React app can use dozens of components simultaneously.
// In this skill, we'll cover how to use multiple components and share them across files.

import React from "react";
import ReactDOM from "react-dom";
import {CustomButton} from "./buttons";

class App extends React.Component {
    constructor(){
        super();
        this.state = { count:0 }
    }

    countDown = () => {
        this.setState({
            count: this.state.count-1
        });
    }

    countUp = () => {
        this.setState({
            count: this.state.count+1
        });
    }

    render(){
        return(
            <div>
                <h1>Welcome to my App</h1>
                <p>I've been clicked {this.state.count} times</p>
                <CustomButton 
                    text="Count down"
                    handleClick={this.countDown}
                />
                <CustomButton 
                    text="Count up"
                    handleClick={this.countUp}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);