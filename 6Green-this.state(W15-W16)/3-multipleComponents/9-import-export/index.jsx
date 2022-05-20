import React from "react";
import ReactDOM from "react-dom";
import {CarBrands} from "./CarBrands";

export const App = () => {
 return (
  <div>
   <h1>Popular Car Makes</h1>
   <CarBrands />
  </div>
 );
};

ReactDOM.render(
 <App />,
 document.getElementById("root")
);
