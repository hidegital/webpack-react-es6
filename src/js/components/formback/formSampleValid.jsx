import React from "react";

// フォームの各パーツを作る
// 汎用input
export const FormInput = React.createClass({
    // デフォルト値を定義する
    getDefaultProps: function() {
        return {
            type: 'text'
        };
    },
    // porpsの型を定義する
    propTypes:{
        title: React.PropTypes.string,
        type: React.PropTypes.string.isRequired,
        name: React.PropTypes.string,
        ph: React.PropTypes.string,
        error: React.PropTypes.string
    },
    render() {
        return (
            <tr>
                <th>{this.props.title}</th><td><input type={this.props.type} name={this.props.name} ref={this.props.name} placeholder={this.props.ph} value={this.props.value} /></td>
            </tr>
        );
    }
});

// 汎用input必須
export const FormInputRequired = React.createClass({
    // デフォルト値を定義する
    getDefaultProps: function() {
        return {
            type: 'text'
        };
    },
    // porpsの型を定義する
    propTypes:{
        title: React.PropTypes.string,
        type: React.PropTypes.string.isRequired,
        name: React.PropTypes.string,
        ph: React.PropTypes.string
    },
    // 入力の有無を確認
    requiredValidat(event){
        // フォームのname属性値を取得
        var type = event.target.name;
        // フォームの入力値を取得
        var val = event.target.value;
        // 取得した値を受け渡せるようにコールバック関数を使う
        this.props.requiredValue(type, val, event);
    },
    render() {
        return (
            <tr>
                <th>{this.props.title}<span className="required">必須</span></th><td><input type={this.props.type} name={this.props.name} ref={this.props.name} placeholder={this.props.ph}
                                                                                          value={this.props.value} onChange={this.requiredValidat} onBlur={this.requiredValidat} required
            /><span className={this.props.erch}>{this.props.error}</span></td>
            </tr>
        );
    }
});

// 都道府県
export const FormPref = React.createClass({
    getDefaultProps() {
        return {
            // 都道府県の値を入れる
            answers: ["都道府県", "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県", "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県", "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"]
        };
    },
    // porpsの型を定義する
    propTypes:{
        name: React.PropTypes.string,
    },
    // 入力の有無を確認
    requiredValidat(event){
        // フォームのname属性値を取得
        var type = event.target.name;
        // フォームの入力値を取得
        var val = event.target.value;
        // 取得した値を受け渡せるようにコールバック関数を使う
        this.props.requiredValue(type, val, event);
    },
    render() {
        var options = this.props.answers.map(function(answer) {
            return <option value={answer} key={answer}>{answer}</option>;
        });
        return (
            <tr>
                <th>都道府県<span className="required">必須</span></th>
                <td>
                    <select name="pref" name="pref" ref={this.props.name} onChange={this.requiredValidat} onBlur={this.requiredValidat} required>
                        {options}
                    </select>
                    <span className={this.props.erch}>{this.props.error}</span>
                </td>
            </tr>
        );
    }
});


// メッセージ
export const FormMessage = React.createClass({
    // porpsの型を定義する
    propTypes:{
        name: React.PropTypes.string,
    },
    // 入力の有無を確認
    requiredValidat(event){
        // フォームのname属性値を取得
        var type = "message";
        // フォームの入力値を取得
        var val = event.target.value;
        // 取得した値を受け渡せるようにコールバック関数を使う
        this.props.requiredValue(type, val, event);
    },
    render() {
        return (
            <tr>
                <th>メッセージ<span className="required">必須</span></th>
                <td>
                    <textarea name="message" value={this.props.value} ref={this.props.name} onChange={this.requiredValidat} onBlur={this.requiredValidat} required /><span className={this.props.erch}>{this.props.error}</span>
                </td>
            </tr>
        );
    }
});

// 送信ボタン
export const FormSend = React.createClass({
    propTypes:{
        disabled: React.PropTypes.string
    },
    // 初期値disableを指定する
    getDefaultProps() {
        return {
            disabled: 'disabled',
            value:"必須項目を入力してください"
        };
    },
    render() {
        return (
            <p className="btn"><input type="submit" value={this.props.value} disabled={this.props.disabled} /></p>
        );
    }
});
