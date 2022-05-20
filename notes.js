
https://nodejs.org/en/download/  and choose "Windows Installer"
Install from Extensions "ES7+React/Redux/react-Native sbnippets"
=> for "rfc" and "rcc" stuff

npx create-react-app .

PICSUM https://picsum.photos/200

-In the terminal, Ctrl+C to kill what is running currently
-the localhost:3000 page will be off 
-then type => "npm install react-router-dom"
// this library allows me to run different components in different routes/paths
-then => "npm start"
-Starting the development server...
-yes
-in App.js, on the top, type "import {BrowserRouter,Routes,Route} from "react-router-dom";"


// localhost:3000 is the port that is running our react application
// App.js is gonna be our Main Component, the parent component, the BIGGEST CONTAINER
/*-------------------------------*/
// DELETE in "App.js": <header></header> 
// DELETE in "App.js": import logo from './logo.svg';
// DELETE in "App.css": all the css code, and put in as below:
* {
        margin: 0;
        padding: 0;
      }
// DELETE under "src": logo.svg (img file)
// DELETE under "src": App.test.js (file)
// DELETE under "src": reportWebVitals.js (file)
// DELETE under "src": setupTests.js  (file)
// DELETE under "src": index.css (file)
// DELETE in "index.js": import "./index.css" (top)
// DELETE in "index.js": import reportWebVitals.js from './reportWebVitals'; (top)
// DELETE in "index.js": reportWebVitals.js(); (bottom)

// in the terminal, if needed, "npm install react-bootstrap"
// then uninstall again, if need, "npm uninstall react-bootstrap"

/*-------------------------------*/
// JSX => to run JavaScript in HTML
// we create COMPONENTS inside "src" folder
// now create "Header.js" (file)



                            |App.js|
                            --------
        /                       |                         \
(Header.js)              (MainContent.js)              (Footer)   
                            /           \
                  (Profile.js)        (Form.js)


                  
// (file) App.test.js which is inside "src" folder
import { render, screen } from '@testing-library/react';
import { server } from 'spdy'
import { terminalWidth } from 'yargs'
import App from './App';

test('renders learn react link', () => {
render(<App />);
const linkElement = screen.getByText(/learn react/i);
expect(linkElement).toBeInTheDocument();
});