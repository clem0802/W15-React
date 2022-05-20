// /*------------------------------------*/ INDEX.HTML
// <!doctype html>
// <html>
//  <head>
//   <link rel="stylesheet" href="./index.css" />
//   <script type="module" src="./index.js"></script>
//  </head>
//  <body>
  
//   <div id="root"></div>

//  </body>
// </html>

// /*------------------------------------*/ INDEX.CSS
// html {
//     font-family: sans-serif;
// }
// body {
//     padding:40px;
//     box-sizing: border-box;
// }
// input, select {
//     border: none;
//     background-color: lightgray;
//     padding: 8px 16px 8px 16px;
//     box-sizing: border-box;
//     width:100%;
//     margin-bottom: 8px;
// }

// /*------------------------------------*/ INDEX.JSX
import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			email: "(No email entered)",
			ageGroup: "(No age group selected)"
		};
	}

	handleEmailEntry = (e) => {
  this.setState({email: e.target.value })
 }

	handleAgeEntry = (e) => {
		this.setState({ageGroup:e.target.value});
	}


// Print the state values email and ageGroup inside of their respective <li> elements. 
// Set up the onChange handlers of both the <input> and <select> so that their respective state values are updated.
// INPUT => onChange={this.handleEmailEntry} 
// SELECT => onChange={this.handleAgeEntry} 
{/* <li id="emailEntry">{this.state.email}</li>
    <li id="ageEntry">{this.state.ageGroup}</li>  */}

	render() {
		return (
			<form>
				<h1>Survey:</h1>
				<input 
					id="emailInput" type="email" placeholder="Your email..." 
					onChange={this.handleEmailEntry} 
				/>
				<select 
					id="ageInput" 
					onChange={this.handleAgeEntry} 
				>
					<option value="No age group">Your age...</option>
					<option value="<18">Younger than 18</option>
					<option value="18-24">18-24</option>
					<option value="25-29">25-29</option>
					<option value="30+">30 or older</option>
				</select>
				<h3>Your submitted responses:</h3>
				<ul>
					<li id="emailEntry">{this.state.email}</li>
					<li id="ageEntry">{this.state.ageGroup}</li>
				</ul>
			</form>
		);
	}
}

ReactDOM.render(
 <App />,
 document.getElementById('root')
);