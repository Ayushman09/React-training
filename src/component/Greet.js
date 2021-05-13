import React from 'react';

const Greet = props => {
    // props.name = 'Rahul'; //it shows an error, as props are immutable
    return (
        <div>
            <h1>
                Hi, Functional component, {props.name}, a.k.a {props.hero}
            </h1>
            {props.children}
        </div>
        )
}

export default Greet;

//named export
//export const Greet = () => <h1>Hello Ayushman</h1>