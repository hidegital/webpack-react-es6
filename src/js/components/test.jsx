import React from "react";
// import style from  '../stylus/layout/header.styl'
// import style from  '../../stylus/layout/header.styl'

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {condition:false};

        this.handleClick = this.handleClick.bind(this);

    }
    handleClick() {
        this.setState({condition : !this.state.condition});
    }
    render() {
        return <div>
            <div className={this.state.condition ? "animated" :"test"}  >Hello {this.props.name}</div>
            <button type="button" onClick={this.handleClick}>Change Condition</button>
        </div>
    }
}

