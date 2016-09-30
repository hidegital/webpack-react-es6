import React from "react";

const CheckValue = {
    // コールバック関数を定義
    _checkValue(event) {
        // フォームのname属性値を取得
        let type = event.target.name;
        // フォームの入力値を取得
        let val = event.target.value;
        // 親コンポーネントから受け取るcheckValue()メソッドを実行
        this.props.checkValue(type, val, event);
    }
};

const FormMail = React.createClass({
    render() {
        return (
            <li>
                <input type="email" name="mail" placeholder="Email"
                    value={this.props.mail}
                    onChange={this._checkValue}
                    onBlur={this._checkValue}
                    required
                />
                <p>{this.props.error}</p>
            </li>
        );
    }
});

