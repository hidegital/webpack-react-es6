// import React from 'react'
// import { render } from 'react-dom'
//
// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = { message: 'something' }
//     }
//
//     onChange(e) {
//         this.setState( {message: e.target.value} )
//     }
//
//     render() {
//         return (
//             <div>
//                 <input type="text" onChange = { this.onChange.bind(this) } />
//                 <p>{ this.state.message }</p>
//             </div>
//         )
//     }
// }
//
// render(<App/>, document.getElementById('app'));


import React from "react";
import ReactDOM from "react-dom";
import CommentBox from "./CommentBox.jsx";


ReactDOM.render(
    <CommentBox />,
    document.getElementById("app")
);





