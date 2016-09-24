import React from "react";
export default class Header extends React.Component {
    render() {
        return <div>
            <ul>
                <li><a href="/">Dashboard</a></li>
                <li><a href="/inbox">Inbox</a></li>
                <li><a href="/calendar">Calendar</a></li>
            </ul>
        </div>

    }
}
