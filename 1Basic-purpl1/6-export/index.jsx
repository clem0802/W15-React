// Underneath the <h5> header, 
// create a <ul> with two child <li> elements that print Home and About in that order.

import React from 'react';
import ReactDOM from 'react-dom';

export const navigation = ( 
  <div id='nav'>
    <h5>Links:</h5>
    <ul>
        <li>Home</li>
        <li>About</li>
    </ul>
 </div>
);

ReactDOM.render(
 navigation,
 document.getElementById('root')
);