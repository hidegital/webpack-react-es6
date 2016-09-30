import React from "react";

var i_name = false;
var i_pref = false;
var i_add = false;
var i_tel = false;
var i_mail = false;
var i_message = false;
var valFlg = false;
var mail_vali = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var tel_vali = /^(0\d{1,4}[\s-]?\d{1,4}[\s-]?\d{4})$/;

// 親となるフォームの大枠を作る
export const FormApp = React.createClass({
    // 初期値disableを指定する
    getInitialState() {
        return {
            disabled: 'disabled',
            errorCheck_name: '',
            errorCheck_mail: ''
        };
    },
    // バリデーションを定義する
    Validation(type, val, event){
        // 必須項目のバリデーションをチェック
        switch(type) {
            // name属性値がnameだった場合
            case "name":
                if(val){
                    i_name = true;
                    // blurの時にバリデーションを通った場合ツールチップを非表示にさせる
                    if(event.type === 'blur') {
                        this.setState({
                            errorCheck_name: ''
                        });
                    }
                } else {
                    i_name = false;
                    // blurの時にバリデーションを通らなかった場合ツールチップを表示させる
                    if(event.type === 'blur') {
                        this.setState({
                            errorCheck_name: 'error_check'
                        });
                    }
                }
                break;
            // name属性値がprefだった場合
            case "pref":
                if(!val.match("都道府県")){
                    i_pref = true;
                    // blurの時にバリデーションを通った場合ツールチップを非表示にさせる
                    if(event.type === 'blur') {
                        this.setState({
                            errorCheck_pref: ''
                        });
                    }
                } else {
                    i_pref = false;
                    // blurの時にバリデーションを通らなかった場合ツールチップを表示させる
                    if(event.type === 'blur') {
                        this.setState({
                            errorCheck_pref: 'error_check'
                        });
                    }
                }
                break;
            // name属性値がaddだった場合
            case "add":
                if(val){
                    i_add = true;
                    // blurの時にバリデーションを通った場合ツールチップを非表示にさせる
                    if(event.type === 'blur') {
                        this.setState({
                            errorCheck_add: ''
                        });
                    }
                } else {
                    i_add = false;
                    // blurの時にバリデーションを通らなかった場合ツールチップを表示させる
                    if(event.type === 'blur') {
                        this.setState({
                            errorCheck_add: 'error_check'
                        });
                    }
                }
                break;
            // name属性値がtelだった場合
            case "tel":
                if(val.match(tel_vali)){
                    i_tel = true;
                    // blurの時にバリデーションを通った場合ツールチップを非表示にさせる
                    if(event.type === 'blur') {
                        this.setState({
                            errorCheck_tel: ''
                        });
                    }
                } else {
                    i_tel = false;
                    // blurの時にバリデーションを通らなかった場合ツールチップを表示させる
                    if(event.type === 'blur') {
                        this.setState({
                            errorCheck_tel: 'error_check'
                        });
                    }
                }
                break;
            // name属性値がmailだった場合
            case "mail":
                if(val.match(mail_vali)){
                    i_mail = true;
                    // blurの時にバリデーションを通った場合ツールチップを非表示にさせる
                    if(event.type === 'blur') {
                        this.setState({
                            errorCheck_mail: ''
                        });
                    }
                } else {
                    i_mail = false;
                    // blurの時にバリデーションを通らなかった場合ツールチップを表示させる
                    if(event.type === 'blur') {
                        this.setState({
                            errorCheck_mail: 'error_check'
                        });
                    }
                }
                break;
            // name属性値がmessageだった場合
            case "message":
                if(val){
                    i_message = true;
                    // blurの時にバリデーションを通った場合ツールチップを非表示にさせる
                    if(event.type === 'blur') {
                        this.setState({
                            errorCheck_message: ''
                        });
                    }
                } else {
                    i_message = false;
                    // blurの時にバリデーションを通らなかった場合ツールチップを表示させる
                    if(event.type === 'blur') {
                        this.setState({
                            errorCheck_message: 'error_check'
                        });
                    }
                }
                break;
        }

        // 全ての必須項目のチェック
        if(i_name === true && i_pref === true && i_add === true && i_tel === true && i_mail === true && i_message === true){
            valFlg = true;
        } else {
            valFlg = false;
        }

        // valFlgがtrueのときdisableを解除する
        // stateをpropsにして送信ボタンへ値を渡す
        if(valFlg === true){
            this.setState({
                disabled: "",
                sendVal:"入力内容を確認する"
            });
        } else {
            this.setState({
                disabled: "disabled",
                sendVal:"必須項目を入力してください"
            });
        }
    },
    render() {
        // requiredValue={this.Validation} でコールバック通知を受け取る
        return (
            <div className="form-entry">
                <table>
                    <FormInputRequired requiredValue={this.Validation} title={'お名前'} type={'text'} name={'name'} ph={'例：サンプル太郎'} error={'名前を入力してください'} erch={this.state.errorCheck_name} />
                    <FormPref requiredValue={this.Validation} error={'都道府県を選択してください'} erch={this.state.errorCheck_pref} />
                    <FormInputRequired requiredValue={this.Validation} title={'住所'} type={'text'} name={'add'} ph={'例：東京都新宿区'}  error={'住所を入力してください'} erch={this.state.errorCheck_add} />
                    <FormInputRequired requiredValue={this.Validation} title={'電話番号'} type={'tel'} name={'tel'} ph={'例：0000-000-000'}  error={'正しい電話番号を入力してください'} erch={this.state.errorCheck_tel} />
                    <FormInputRequired requiredValue={this.Validation} title={'メールアドレス'} type={'email'} name={'mail'} ph={'例：sample@sample.com'} error={'正しいメールアドレスを入力してください'} erch={this.state.errorCheck_mail} />
                    <FormMessage requiredValue={this.Validation} error={'メッセージを入力してください'} erch={this.state.errorCheck_message} />
                </table>
                <FormSend value={this.state.sendVal} disabled={this.state.disabled} />
            </div>
        );
    }
});

// フォームの各パーツを作る
// 汎用input
var FormInput = React.createClass({
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
var FormInputRequired = React.createClass({
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
var FormPref = React.createClass({
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
var FormMessage = React.createClass({
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
var FormSend = React.createClass({
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




// id='content'に<FormApp />を埋め込む（マウント）
// React.render(
//     <FormApp />,
//     document.getElementById('content')
// );
