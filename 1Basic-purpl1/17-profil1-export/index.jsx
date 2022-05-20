import React from "react";
import ReactDOM from "react-dom";

export const Profile = (props) => {
 const name = props.fullname;
 const school = props.schoolname;
 const desc = props.description;
 return (
  <div>
   <h1>{name}</h1>
   <h3>School: {school}</h3>
   <p>{desc}</p>
  </div>
 );
}

ReactDOM.render(
 <Profile 
  name ="Tom Bookworm" 
  school ="Stonewall Elementary" 
  desc ="A boy who loves to read and imagine the stories from his favorite novels." 
 />,
 document.getElementById("root")
);