import React from "react";
// import style from  '../stylus/layout/header.styl'
import style from  '../../stylus/layout/header.styl'

import TestImg from '../../img/rating.png'

export default class Header extends React.Component {
    render() {
        return <div>
            <ul className={style.header}>
            {/*<ul>*/}
                <li><img src={TestImg} alt="test" className="img-responsive"/></li>
                <li><a href="/">Dashboard</a></li>
                <li><a href="/inbox">Inbox</a></li>
                <li><a href="/calendar">Calendar</a></li>
            </ul>
        </div>
    }
}











