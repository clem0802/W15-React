// How many prop values is App using?
// App uses 3 PROP VALUES => (Query / Category / Page)

(from LIVIA)
// first we set the "TEMPLATE", then we send in the "DATA"
// "const App" is a template, we create 3 spots for data coming in
// "const App only has 3 attributes listed/used: {{props.search}}, {{props.category}}, {{props.page}}
// the data is coming in via the <App atttributes, we have 4 attributes
// but we use only 3 in the template
// so here, 4 data attributes passed, and 3 of them used

/*-----------------------------------*/
import React from "react";
import ReactDOM from "react-dom";

const App = (props) => {
 return (
   <div>
        <h3>Query: {props.search}</h3>
        <p>Category: {props.category}</p>
        <p>Page: {props.page}</p>
  </div>
 );
}

ReactDOM.render(
 <App 
    search="lens" 
    category="travel" 
    skill="new_to_photography" 
    page="2" 
 />,
 document.getElementById("root")
);


/*-----------------------------------*/
// Why do React applications normally name their topmost component as App?
// It is usually the starting point of a React app