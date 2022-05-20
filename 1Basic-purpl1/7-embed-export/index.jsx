// Use an embedded expression to insert hours after the <h1> header rendered by clock.
// Today's Hours
// 10 AM - 6:30 PM

import React from 'react';
import ReactDOM from 'react-dom';

export const hours = <h5>10 AM - 6:30 PM</h5>;

export const clock = (
 <div>
    <h1>Today's Hours</h1>,
    {hours}
 </div>
);

ReactDOM.render(
 clock,
 document.getElementById('root')
);