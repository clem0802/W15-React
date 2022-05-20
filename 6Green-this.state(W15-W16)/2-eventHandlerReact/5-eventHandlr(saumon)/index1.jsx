import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(){
        super();
        this.state = { 
            desc: "" 
        }
    }

    descChange = (e) => {
        this.setState({
            desc: e.target.value
        });
    }

    render(){
        return(
            <div>
                <img src="https://mimo.app/i/salmon-dish.png" alt="Salmon" />
                <p>Enter a brief description of the image.</p>
                <input 
                    type="text"
                    name="desc"
                    value={this.state.desc}
                    onChange={this.descChange}
                />
                <h5>Your Description:</h5>
                <p>{this.state.desc}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);