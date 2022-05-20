// Code e.target.value so that the <input />'s value is saved to state.
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor() {
    super();
    this.state = { nickname: "" }
 }
 
 handleInput = (e) => {
  this.setState({
   nickname: e.target.value //       
  });
 }

 render() {
  return (
   <div>
        <h3>Companion Get!</h3>
        <p>What nickname would you like to give your new friend?</p>
        <input 
        name="nickname"
        type="text"
        value={this.state.nickname}
        onChange={this.handleInput}
        />
    <hr />
        <div>
            <img src="https://mimo.app/i/snapcat.png" alt="SnapCat" />
            <span>Nickname: {this.state.nickname}</span>
        </div>
   </div>
  );
 }
}

ReactDOM.render(
 <App />,
 document.getElementById("root")
);
