import React from "react";
import ReactDOM from "react-dom";
import request from "superagent";
import Marked from 'marked';


// require('style!css!stylus!../stylus/app.css');
// import './stylus/app.css'
// import './stylus/app.css'
import './stylus/app.styl'

import Header from './components/header';

// import {Router} from "react-router";
//
// var Route       = Router.Route;
// var Link        = Router.Link;
// var hashHistory = Router.hashHistory;
import { IndexRoute,Router,Route,Link,browserHistory,hashHistory } from 'react-router'

// import {DefaultRoute, Router,Route,Link,RouteHandler,hashHistory } from 'react-router'

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



class App extends React.Component {
    render() {
        /**
         * <Route>を入れ子にしているので、
         * 内側の<Route>に設定されているコンポーネントが
         * this.props.childrenに入ってくる
         */
        return <div>
            <h1>React Router</h1>
            <h2>Menu</h2>
            <ul>
                <li><Link to="/hello">Hello</Link></li>
                <li><Link to="/page/1">Page 1</Link></li>
                <li><Link to="/page/2">Page 2</Link></li>
                <li><Link to="/page/3">Page 3</Link></li>
            </ul>
            <div>
                {this.props.children}
            </div>
        </div>;
    }
}

class Page extends React.Component {
    render() {
        /**
         * this.props.params
         * URLに含まれるパラメタを取得
         */
        return <h2>PageNo: {this.props.params.no}</h2>;
    }
}


class Hello extends React.Component {
    render() {
        return <div>
        {/*<CommentBox url="api/test.json" pollInterval={2000} />,*/}
        <Header />,
        <h2>Hello! React Router</h2>
        </div>;
    }
}





// NotFoundコンポーネント
// URLにマッチするコンテンツがない場合に表示
class NotFound extends React.Component {
    render() {
        return <h2>Not Found</h2>;
    }
}



/*まとめるだけのclass*/
class MyApp extends React.Component {
    render() {
        return(
            <div>

                <Header />
            </div>
        );
    }
}



ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="page/:no" component={Page} />
            <Route path="hello" component={Hello} />
        </Route>
        <Route path="*" component={NotFound} />
    </Router>,
    document.getElementById('app')
    // document.body
);








