import React from "react";
import style from  '../stylus/layout/header.styl'

export default class Header extends React.Component {
    render() {
        return <div>
            <ul className={style.header}>
                <li><a href="/">Dashboard</a></li>
                <li><a href="/inbox">Inbox</a></li>
                <li><a href="/calendar">Calendar</a></li>
            </ul>
        </div>

    }
}





