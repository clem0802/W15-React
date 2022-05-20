import React from "react";
import ReactDOM from "react-dom";


// i) Add a property catData with an empty object value to the <App/> component.
// ii) Add to it an object propertyname with :
// a string name of you choice, 
// a property avatar with a value "https://mimo.app/i/bubu.png" and
// a property adoptionDate with a string date of your choice.
// iii) Pass each respective value of catData to their corresponding variable in render().
class App extends React.Component {
    consturctor(props){
        super(props);
    }

    render(){
        const name = this.props.catData.name; //!
        const avatar = this.props.catData.avatar; //!
        const adoptionDate = this.props.catData.adoptionDate; //!

        return(
            <div>
                <h2>Your Cat</h2>
                <p>Name: {name}</p>
                <img src={avatar} alt={name} />
                <p>Adopted in {adoptionDate}</p>
            </div>
        );
    }
}

// object catData below !!!
ReactDOM.render(  
    <App 
        catData={
          {
            name: "Webster",
            avatar: "https://mimo.app/i/bubu.png",
            adoptionDate: "Dec 25th 2020",
          }
       }
    />,
    document.getElementById("root")
);

export default App;