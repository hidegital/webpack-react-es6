import React from "react";
import ReactDOM from "react-dom";
import Marked from 'marked'
import request from "superagent";


// var data = [
//     {author: 'Pete Hunt', text: 'This is one comment', id: 0},
//     {author: 'Jordan Walke', text: 'This is *another* comment', id: 1}
// ];

class Comment extends React.Component {
    render() {
        console.log(this.props.id);
        var rawMarkup = Marked(this.props.children.toString(), {sanitize: true});
        return(
            <div className='comment'>
                <h3 className='commentAuthor'>
                    {this.props.author}
                </h3>
                <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
                <span className="testtest">
                    {this.props.text}
                    {this.props.children}
                </span>
            </div>
        );
    }
    /*
     {this.props.text}
     {this.props.children} 上記では同じもの
     CommentList
    */
    // componentWillMount() {
    //     console.log(this.props.text);
    // }
}

class CommentList extends React.Component {
    render() {
        // console.log(this.props.data);
        var commentNodes = this.props.data.map((comment,i)=> {
            return(
                <Comment author={comment.author} key={i} text={comment.text} id={comment.id}>
                    {comment.text}
                </Comment>);
        });
        return(<div className='commentList'>{commentNodes}</div>);
    }
}


/*
 <Comment author={comment.author} key={i} text={comment.text}>
 {comment.text}子コンポーネントでthis.props.childrenでアクセスできる

 </Comment>);
*/

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    loadCommentsFromServer() {
        request
            .get(this.props.url)
            .end((err, res) => {
                if (err) {
                    throw err;
                }
                this.setState({data: res.body});
            });
    }
    componentDidMount() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
    }
    render() {
        return(
            <div className='commentBox'>
                <h2>Comments</h2>
                <CommentList data={this.state.data} />
            </div>
        );
    }
}
ReactDOM.render(
    // <CommentBox data={data}/>,
    <CommentBox url="api/test.json" pollInterval={2000} />,
    document.getElementById('app')
);
