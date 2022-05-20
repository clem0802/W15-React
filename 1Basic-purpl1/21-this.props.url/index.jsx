// Complete the <a> tag inside render() by accessing 
// and incorporating the appropriate property url into the href attribute.

import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h2>Want to learn more about the Zoo?</h2>
                <p>You can visit us online at the below link! 
                   Our website has a ton of helpful resources and information, 
                   like our featured 'Animal of the Month' and Zoo hours!
                </p>
                <a href={this.props.url}>
                   Click here to visit:
                </a>
            </div>
        );
    }
}

ReactDOM.render(
    <App
     url="https://getmimo.com/"
     />,
     document.getElementById("root")
);