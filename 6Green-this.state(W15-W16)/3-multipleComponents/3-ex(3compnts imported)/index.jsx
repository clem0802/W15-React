// In the code below, how many React components beside React are being imported into index.jsx?
// 3
// We need to Export components before we can Import them
// Exported components can be Imported "as often as needed"

import React from "react";

import { 
 CustomButton, 
 CustomImage,
 CustomHeader
} from "./elements";

class App extends React.Component {}
