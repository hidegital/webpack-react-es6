import React from "react";
// import style from  '../stylus/layout/header.styl'
import style from  '../../stylus/layout/header.styl'
import { IndexRoute,Router,Route,Link,browserHistory,hashHistory } from 'react-router'

import TestImg from '../../img/rating.png'

export default class Header extends React.Component {
    render() {
        return <div>
            <h1>{this.props.title}</h1>
            <ul className={style.header}>
            {/*<ul>*/}
                <li><img src={TestImg} alt="test" className="img-responsive"/></li>
                <li><Link to="/page/1">Page 1</Link></li>
                <li><a href="/inbox">Inbox</a></li>
                <li><a href="/calendar">Calendar</a></li>
            </ul>
        </div>
    }
}












