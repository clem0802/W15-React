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
		this.state = { make:"" };
	}

	handleCarMakeInput = (event) => {
		this.setState({make: event.target.value})
 }

	render() {
		return (
			<div>
				<h1>My Favorite car make is {this.state.make}</h1>
				<input 
					id="makeInput"
					type="text"
					placeholder="Type Here"
					onChange={this.handleCarMakeInput}
				/>
			</div>
		);
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);