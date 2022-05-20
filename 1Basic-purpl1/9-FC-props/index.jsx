// How are Functional Components different from normal JavaScript functions? 
// The FC specifically return JSX elements

/*-----------------------------------*/
// With which method can we pass data into a component rendered with JSX, such as <App /> ?
// Useing JSX attributes

/*-----------------------------------*/
// What's wrong with the code sample below?
// "props" does NOT need PARENTHESES !!!!
import React from "react";

const App = (props) => {
 
 const years = props().years;
 const language = props().language;
 const employment = "not employed";
 if (props().hasJob) {
  employment = "employed";
 }

 return (
  <p>
   I am {years} years old, and my first language is {language}. I am currently {employment}.
  </p>
 );
}

const mainApp = (
 <App 
  years={25} 
  language="Japanese"
  hasJob={true}
 />
);