import React from "react";
import ReactDOM from "react-dom";
import request from "superagent";


function HelloMessage(props) {
    return <h1>Hello, {props.name}</h1>;
}

function HelloMessageList(props) {
    var list = props.names.map(function (name) {
        return <HelloMessage name={name} />;
    });

    return <div>{list}</div>;
}

class HelloWorldApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            names: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            name:event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            name: '',
            names: this.state.nemes.concat([this.state.name]),
        });
    }
    render() {
        return(
            <div>
                <HelloMessage name={this.state.name} />
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </form>
                <HelloMessageList names={this.state.names} />
            </div>
        );
    }
}

//chapter2 countup
class CountUpApp extends React.Component {
    constructor(prop){
        super(prop);
        this.state = { count:0 };
        this.countUp = this.countUp.bind(this);
    }

    countUp() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render(){
        return(
            <div>
                <p>count: {this.state.count}</p>
                <button onClick={this.countUp}>
                    Count Up!
                </button>
            </div>
        )
    }
}

//chapter2
//WithoutShoudComponentUpdate

class WithoutShoudComponentUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'hoge'
        };
        this.update = this.update.bind(this);
    }

    update() {
        this.setState(
            {value: 'hoge'}
        );
    }
    render(){
        console.log('WithoutShoudComponentUpdate\'s render was called.');

        return(
            <div>
                <h1>shouldComponentUpdate無し</h1>
                <p>this.state.value: {this.state.value}</p>
                <button onClick={this.update}>更新</button>
            </div>
        );
    }
}

class WithShoudComponentUpdate extends React.Component {
    constructor(props){
        super(props);
        this.state = { value:'hoge' };
        this.update = this.update.bind(this);
    }
    update(){
        this.setState({
            value:'hoge'
        });
    }
    /**
     * shouldComponentUpdate
     *
     * - このメソッドがfalseを返す場合、renderは呼ばれない
     * - props, stateが更新され、renderが呼ばれる前に実行される
     * - 引数のnextProps, nextStateは更新後のprops, state
     * - this.state, this.propsは更新前
     */
    shouldComponentUpdate(nextProps,nextState) {
        /**
         * 値が変わっていない場合は、renderを呼ばせない
         */
        return this.state.value !== nextState.value;
    }
    render() {
        console.log('WithShoudComponentUpdate\'s render was called.');
        return (
            <div>
                <h1>shouldComponentUpdateあり</h1>
                <p>this.state.value: {this.state.value}</p>
                <button onClick={this.update}>更新</button>
            </div>
        );
    }
}

/*window-size*/
class WindowSizeApp extends React.Component {
    constructor(props) {
        super(props);
        /**
         * stateの初期化
         *
         * - window.innerWidth, window.innerHeightはここでは参照しない
         *   - constructorはサーバサイドで呼ばれる
         */
        this.state = {
            innerWidth: 0,
            innerHeight: 0,
        };
        this.updateWindowSize = this.updateWindowSize.bind(this);
    }
    /**
     * componentDidMount
     *
     * - コンポーネントがDOMに追加された後に呼ばれる
     * - DOMに関する操作はここで行う
     *   - window.addEventListener
     *   - window.innerWidth, window.innerHeightの参照
     */
    componentDidMount() {
        window.addEventListener('resize',this.updateWindowSize);
        this.updateWindowSize();
    }
    /**
     * componentWillUnmount
     *
     * - コンポーネントがDOMから削除される時に呼ばれる
     * - イベントの解除などの後片付けをする
     */
    componentWillUnmount() {
        window.removeEventListener('resize',this.updateWindowSize)
    }
    /**
     * updateWindowSize
     *
     * - window.innerWidth, window.innerHeightを取得しstateを更新
     */
    updateWindowSize() {
        this.setState({
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
        });
    }
    render() {
        return (
            <ul>
                <li>window.innerWidth: {this.state.innerWidth}</li>
                <li>window.innerHeight: {this.state.innerHeight}</li>
            </ul>
        );
    }
}



/*まとめるだけのclass*/
class MyApp extends React.Component {
    render() {
        return(
            <div>
                <HelloWorldApp />
                <CountUpApp />
                <WithoutShoudComponentUpdate />
                <WithShoudComponentUpdate />
                <WindowSizeApp />
            </div>
        );
    }
}


ReactDOM.render(
    <MyApp />,
    document.getElementById('app')
);


