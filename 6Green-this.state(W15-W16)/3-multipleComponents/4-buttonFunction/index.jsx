import React from "react";
import { MyButton } from "./buttons";

class App extends React.Component {
    constructor(){
        super();
        this.state = { clicked: false }
    }

    handleButton = (e) => {
        this.setState({
            clicked: true
        });
    }

    render(){
        return(
            <div>
                <h1>The Button to Click All Buttons</h1>
                <MyButton 
                    clickFunction={this.handleButton}
                    text="Click me!"
                />
            </div>
        );
    }
}