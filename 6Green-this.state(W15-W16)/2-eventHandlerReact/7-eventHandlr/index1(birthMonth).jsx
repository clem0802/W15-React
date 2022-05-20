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
// ça s'affiche d'abord "September" dans la case input
// puis on peut l'effacer et écrire les autres mois
import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { birthMonth :"September" };
	}

	handleBirthMonthInput = (event) => {
        this.setState({birthMonth: event.target.value })
    }

    // {this.state.birthMonth} inside "value" and "h2"
	render() {
		return (
			<div>
                <input 
					id="monthInput"
					type="text"
                    value={this.state.birthMonth}
					placeholder="Type Here"
					onChange={this.handleBirthMonthInput}
				/>
				<h1>My Birth Month is:</h1>
                <h2>{this.state.birthMonth}</h2>
			</div>
		);
	}
}

ReactDOM.render(
 <App />,
 document.getElementById('root')
);