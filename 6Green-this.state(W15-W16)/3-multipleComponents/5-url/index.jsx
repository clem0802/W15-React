import React from "react";
import { MyButton, MyUrl, } from "./elements";

class App extends React.Component {
    constructor(){
        super();
        this.state = { clicked: flase }
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
                <MyUrl 
                    url="https://www.google.com"
                    text="Search for answers."
                />
            </div>
        );
    }
}