// Complete the this.setState call so that the component properly updates state 
// every time someone types into the <input /> element.

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(){
        super();
        this.state = { search: "" }
    }

    handleSearch = (event) => {
        this.setState({
            search:event.target.value
        });
    }

    render(){
        const remaining = 16 - this.state.search.length;
        return(
            <div>
                <h3>Boogle</h3>
                <input
                    name="searchQuery"
                    value={this.state.search}
                    placeholder="ex. Dogs"
                    onChange={this.handleSearch}
                    maxLength="16"
                />
                <span> {remaining} </span>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);