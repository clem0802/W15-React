import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(){
        super();
        this.state = {count:0};
    }

    // Inside of componentDidMount(), complete the this.setState statement so that count is set to 1.
    componentDidMount(){
        this.setState({
            count:1
        })
    }

    // Set this.updateCount as the onClick event handler for the <button> element. (in HTML)
    updateCount = () => {
        const newCount = this.state.count+1;
        this.setState({
            count:newCount
        });
    }

    render(){
        return(
            <div>
                <h1>Loader</h1>
                <p>I've been loaded {this.state.count} times</p>
                <button onClick={this.updateCount}>Click me!</button>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);