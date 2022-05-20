import './App.css';
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

function App() {


  const user = "Clems"; // then {user} inside return <div>
  const day = "Wednesday"; // then {day} inside return <div>
  const weather = "cloudy";
   
  // <Header user={user} can also be written, myName={user}
  //                                          (Ok改) (No改)

  return (
    <div className="container">
        <Header user={user} day={day} />
        <MainContent user={user} />
        <Footer weather={weather} />
    </div>
  );
}

export default App;