// Use an embedded expression to insert soup in the <h4> header after the <h1> header in menu. 
// Use another embedded expression to insert wine in the <h5> header after the <p> element in menu.

import React from 'react';
import ReactDOM from 'react-dom';

export const soup = 'Chicken Noodle';
export const wine = 'Rose of Tempranillo';

export const menu = (
 <div>
    <h1>Soup Du Jour:</h1>
    <h4>{soup}</h4>
    <p>With:</p>
    <h5>{wine}</h5>
 </div>
);

ReactDOM.render(
 menu,
 document.getElementById('root')
);