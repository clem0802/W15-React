// To use a component in a different file, we need to export that component first.
// Code "export" at the beginning of const MyImage.
/*----------------------------------------*/
// Once we've passed data from the [PARENT component App] to the [CHILD component MyImage] via JSX attributes, 
// we can then use "props" in MyImage.
// In MyImage add "props.name" (x2) at the specific parts to complete the component.
/*----------------------------------------*/
// With practice, you'll soon be able to make full-fledged React applications 
// that incorporate dozens of "Functional Components" and "Class Components".


import React from "react";

export const MyImage = (props) => {
    return(
        <img 
            src={"https://mimo.app/i/" + props.name + ".png"}
            alt={props.name}
        />
    );
}