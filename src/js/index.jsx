import React from "react";
import ReactDOM from "react-dom";
import request from "superagent";
import Marked from 'marked';

import Header from './components/header';
import Test from './components/test';

import { IndexRoute,Router,Route,Link,browserHistory,hashHistory } from 'react-router'
// import {DefaultRoute, Router,Route,Link,RouteHandler,hashHistory } from 'react-router'

//metatag用
import DocumentMeta from 'react-document-meta';

//css
import '../stylus/app.styl'


class App extends React.Component {
    render() {
        return <div>
            <h1>React Router</h1>
            <h2>Menu</h2>
            <ul>
                <li><Link to="/top">Hello</Link></li>
                <li><Link to="/page/1">Page 1</Link></li>
                <li><Link to="/page/2">Page 2</Link></li>
                <li><Link to="/page/3">Page 3</Link></li>
                <li><Link to="/form">Form</Link></li>
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
class Form extends React.Component {
    render() {
        const meta = {
            title: 'Some Meta Title',
            description: 'I am a description, and I can create multiple tags',
            canonical: 'http://example.com/path/to/page',
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'react,meta,document,html,tags'
                }
            }
        };
        return (
            <div>
                <DocumentMeta {...meta} />
                <Header />,
                <h1>form</h1>
            </div>
        );
    }
}

class Top extends React.Component {
    render() {
        return <div>
        {/*<CommentBox url="api/test.json" pollInterval={2000} />,*/}
        <Header />,
        <Test />,
        <h2>Top! React Router</h2>
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
                <Test />
            </div>
        );
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="page/:no" component={Page} />
            <Route path="top" component={Top} />
            <Route path="form" component={Form} />
        </Route>
        <Route path="*" component={NotFound} />
    </Router>,
    document.getElementById('app')
    // document.body
);











