// -----------------------------------------(HTML)
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
// -----------------------------------------(CSS)
// html {
//     font-family: sans-serif;
//    }
//    html,body {
//     padding:0;
//     margin:0;
//    }
//    body {
//     position:relative;
//     height:100%;
//     width:100%;
//     padding:40px;
//     box-sizing: border-box;
//    }
//    h3 { 
//        margin-bottom:0px; 
//    }
//    p { 
//        margin-top:4px;
//    }
//    ul {
//        padding-left:0px;
//    }
//    button {
//        border:2px solid brown;
//        border-radius: 10px;
//        padding:4px 8px 4px 8px;
//        background-color: lightgreen;
//        color: brown;
//    }

// -----------------------------------------(cf "jsx7-1.jpg" & "jsx7-2.jpg")
// -----------------------------------------(JSX)
import React from "react";
import ReactDOM from "react-dom";

export default class Basket extends React.Component {
    constructor(){
        super();
        this.state = {
            fruitBasket:["apple","oranges","bananas"]
        };
    }

    updateFruit = (newFruit) => {
        this.setState(prevState => ({
            fruitBasket: prevState.fruitBasket.concat(newFruit)
        }));
    }

    render(){
        return(
            <div>
                <ul id="fruits">
                    {this.state.fruitBasket.map((fruit, i) => {
                        return (
                            <li key={"fruit"+i}>{fruit}</li>
                        );
                    })}
                </ul>
                <button id="add_more" onClick={()=>this.updateFruit("strawberries")}>
                    Add more Strawberries!
                </button>
            </div>
        );
    }
}

ReactCOM.render(
    <Basket />,
    document.getElementById("root")
);