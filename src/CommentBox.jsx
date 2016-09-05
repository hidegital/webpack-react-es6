// import React from "react";
// import request from "superagent";
// import CommentList from "./CommentList";
// import CommentForm from "./CommentForm";
//
// export default class CommentBox extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: []
//         };
//
//         this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
//     }
//
//     loadCommentsFromServer() {
//         request
//             .get(this.props.url)
//             .end((err, res) => {
//                 if (err) {
//                     throw err;
//                 }
//                 this.setState({data: res.body});
//             });
//     }
//
//     handleCommentSubmit(comment) {
//         var comments = this.state.data;
//         comment.id = Date.now();
//         var newComments = comments.concat([comment]);
//         this.setState({data: newComments});
//         request
//             .post(this.props.url)
//             .send(comment)
//             .end((err, res) => {
//                 if (err) {
//                     this.setState({data: comments});
//                     throw err;
//                 }
//                 this.setState({data: res.body});
//             });
//     }
//
//     componentDidMount() {
//         this.loadCommentsFromServer();
//         setInterval(this.loadCommentsFromServer, this.props.pollInterval);
//     }
//
//     render() {
//         return (
//             <div className="commentBox">
//                 <h1>Comments</h1>
//                 <CommentList data={this.state.data}/>
//                 <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
//             </div>
//         );
//     }
// }


// tutorial1.js
// var CommentBox = React.createClass({
//     render: function() {
//         return (
//             <div className="commentBox">
//                 Hello, world! I am a CommentBox.
//             </div>
//         );
//     }
// });
// ReactDOM.render(
//     <CommentBox />,
//     document.getElementById('content')
// );


import React from 'react'
// import CommentList from './CommentList'
// import CommentForm from './CommentForm'

export default class CommentBox extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='commentBox'>
                <h2>Comments</h2>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
}
