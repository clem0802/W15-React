import './App.css';

// we can send variables from "PARENT => CHILD" only
// direction, always from top => bottom
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

function App() {

  // below, create JS variable, before "return" statement
  // INSIDE the App() function, but BEFORE the "return" statement
  const user = "Clems"; // then {user} inside return <div>
  const day = "Wednesday"; // then {day} inside return <div>
  const weather = "cloudy";
   
  // <Header user={user} can also be written, myName={user}
  //                                          (Ok改) (No改)
  // then in Header.js, inside <div> should be {props.myName}
  return (
    <div className="container">
        <Header user={user} day={day} />
        <MainContent user={user} />
        <Footer weather={weather} />
    </div>
    
  );
}

export default App;
