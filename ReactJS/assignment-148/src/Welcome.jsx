import React from "react";
import ChildComponent from "./childComponent"; // Capitalize the import

export default function Welcome() {
    return (
        <>
            <h1>Hello, welcome React JS assignment 148</h1>
            <ChildComponent firstName= "Virat" lastName= "Kohli" />
             <p>Welcome</p>;
        </>
    );
}






// export default class Welcome extends React.Component {
//     constructor(props) {
//         super(props);
        
//     }

//     render() {

//         // this.props.firstName = "Rohit";
        
//         return (
//             <div>
//                  <h1>Hello{this.props.firstName} {this.props.lastName}, welcome to ReactJS</h1>
//                  <childComponent />
//             </div>
//         );}
// } 