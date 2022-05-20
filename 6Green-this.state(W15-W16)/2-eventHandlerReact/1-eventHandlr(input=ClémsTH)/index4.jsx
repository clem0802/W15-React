// /*--------------------------------*/ INDEX.HTML
// <!doctype html>
// <html>
//  <head>
//     <link rel="stylesheet" href="./index.css" />
//     <script type="module" src="./index.js"></script>
//  </head>
//  <body>
//     <div id="root"></div>
//  </body>
// </html>

// /*--------------------------------*/ INDEX.CSS
// html {
//     font-family: sans-serif;
// }
// body {
//     padding:40px;
//     box-sizing: border-box;
// }
// input {
//     border:none;
//     background-color: lightgray;
//     padding:8px 16px 8px 16px;
//     box-sizing: border-box;
//     width:100%;
// }

// /*--------------------------------*/ INDEX.JSX
import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name:"" };
	}

	handleNameInput = (e) => {
        this.setState({name: e.target.value})
 }

    // Use the "onChange" handler and the method "handleNameInput()"" to track the change in the input field.
    // cf photos "jsx4-1.jpg" & "jsx4-2.jpg"
	render() {
		return (
			<div>
				<h1>Hello, {this.state.name}</h1>
				<input 
                    id="nameInput"
					type="text"
					placeholder="Type Your Nickame Here"
					onChange={this.handleNameInput}
				/>
			</div>
		);
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);