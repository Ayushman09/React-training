import React from 'react';

// Normal Greet (Structured)
// const Greet = props => {
//     // props.name = 'Rahul'; //it shows an error, as props are immutable
//     return (
//         <div>
//             <h1>
//                 Hi, Functional component, {props.name}, a.k.a {props.hero}
//             </h1>
//         </div>
//         )
// }
//destructure either doing this
// const GreetDestructure = ({name,hero}) => {
    
//     return (
//         <div>
//             <h1>
//                 Hi, Functional component, {name}, a.k.a {hero}
//             </h1>
//         </div>
//         )
// }

// or doing this
const GreetDestructure = props => {
    const {name,hero} = props
    return (
        <div>
            <h1>
                Hi, Destructured, {name}, a.k.a {hero}
            </h1>
        </div>
        )
}

export default GreetDestructure;