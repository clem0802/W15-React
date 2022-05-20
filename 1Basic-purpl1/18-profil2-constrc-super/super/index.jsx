import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
 constructor(props) {
  super(props);
 }
 render() {
  const avatar = thisprops.userData.avatar;
  const name = this.props.userData.name;
  const joined = this.props.userData.joined;

  return (
   <div>
    <h2>Your Profile</h2>
    <img src={avatar} alt={name} />
    <p>Name: {name}</p>
    <h6>Joined: {joined}</h6>
   </div>
  );
 }
}

ReactDOM.render(
 <App 
  userData={
   {
    name: "Christina Lee",
    joined: "Aug Sep 05, 2001",
    avatar: "https://mimo.app/i/lee.png"
   }
  } 
 />,
 document.getElementById("root")
);