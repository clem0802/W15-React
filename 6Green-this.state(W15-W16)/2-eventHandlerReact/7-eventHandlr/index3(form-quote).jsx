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
		this.state = { 
			favoriteQuote:"",
			book:"" 
		};
	}

	handleFavoriteQuoteInput = (e) => {
  this.setState({favoriteQuote: e.target.value })
 }

	handleBookInput = (e) => {
		this.setState({book:e.target.value});
	}

	// Complete the code so that any changes to your favorite quote is rendered and displayed in the first <p> element, 
	// and any changes to the source of that quote is rendered and displayed in the second <p> element.
	// {this.state.favoriteQuote}
	// {this.state.book}
	render() {
		return (
			<form>
				<h1>My Favorite Quote:</h1>
                <p className="quote">{this.state.favoriteQuote}</p>
				<input
					id="quoteInput" 
					type="text"
					placeholder="Typeth thy quote here..."
					onChange={this.handleFavoriteQuoteInput}
				/>
				<hr />
                
				<h3>This comes from the book/story called:</h3>
				<p className="book">{this.state.book}</p>
				<input 
					id="bookInput"
					type="text"
					placeholder="Where did it come from?"
					onChange={this.handleBookInput}
				/>
			</form>
		);
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);