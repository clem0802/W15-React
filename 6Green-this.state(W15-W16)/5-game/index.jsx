// Ensure that the this.state.game prints properly on the screen.

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(){
        super();
        this.state = {game:"Plumber"};
    }

    setPlumber = () => {
        this.setState({game:"Plumber"});
    }
    setBlue = () => {
        this.setState({game:"Blue Runner"});
    }
    
    render(){
        return(
            <div>
                <h1>My favorite game is {this.state.game}</h1>
                <p>Set to:</p>
                <button onClick={this.setPlumber}>Plumber</button>
                <button onClick={this.setBlue}>Blue Runner</button>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);