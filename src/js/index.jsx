import React from "react";
import ReactDOM from "react-dom";
import request from "superagent";

import Header from './components/header';
import Test from './components/test';
// import FormApp from './components/form'
import ImageUpload from './components/fileUpload'
import FileUploadModal from './components/fileUploadModal'


import { IndexRoute,Router,Route,Link,browserHistory,hashHistory } from 'react-router'
// import {DefaultRoute, Router,Route,Link,RouteHandler,hashHistory } from 'react-router'

//metatag用
import DocumentMeta from 'react-document-meta';

//css
import '../stylus/app.styl'

let flg_name = false;
let flg_pref = false;
let flg_mail = false;
let file   = false;
let valFlg = false;
let mail_valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

class FormApp extends React.Component {
	constructor() {
		super();
		this.state = {
			disabled: 'disabled',
			errorCheck_name: '',
			errorCheck_mail: ''
		};
		this.Validation = this.Validation.bind(this);
	}
	// バリデーションを定義する
	Validation(type, val, event){
		// 必須項目のバリデーションをチェック
		switch (type) {
			// name属性値がnameだった場合
			case "name":
				if (val) {
					flg_name = true;
					// blurの時にバリデーションを通った場合非表示にさせる
					if (event.type === 'blur') {
						console.log('blur');
						this.setState({
							errorCheck_name: ''
						});
					}
				} else {
					flg_name = false;
					// blurの時にバリデーションを通らなかった場合表示させる
					if (event.type === 'blur') {
						this.setState({
							errorCheck_name: 'error_check'
						});
					}
				}
				break;
			// name属性値がprefだった場合
			case "pref":
				if (!val.match("都道府県")) {
					flg_pref = true;
					// blurの時にバリデーションを通った場合非表示にさせる
					if (event.type === 'blur') {
						this.setState({
							errorCheck_pref: ''
						});
					}
				} else {
					flg_pref = false;
					// blurの時にバリデーションを通らなかった場合表示させる
					if (event.type === 'blur') {
						this.setState({
							errorCheck_pref: 'error_check'
						});
					}
				}
				break;
			// name属性値がmailだった場合
			case "mail":
				if (val.match(mail_valid)) {
					flg_mail = true;
					// blurの時にバリデーションを通った場合ツールチップを非表示にさせる
					if (event.type === 'blur') {
						this.setState({
							errorCheck_mail: ''
						});
					}
				} else {
					flg_mail = false;
					// blurの時にバリデーションを通らなかった場合ツールチップを表示させる
					if (event.type === 'blur') {
						this.setState({
							errorCheck_mail: 'error_check'
						});
					}
				}
				break;
		}
		// 全ての必須項目のチェック
		if (flg_name === true && flg_pref === true && flg_mail === true) {
			valFlg = true;
		} else {
			valFlg = false;
		}

		// valFlgがtrueのときdisableを解除する
		// stateをpropsにして送信ボタンへ値を渡す
		if (valFlg === true) {
			this.setState({
				disabled: "",
				sendVal: "入力内容を確認する"
			});
		} else {
			this.setState({
				disabled: "disabled",
				sendVal: "必須項目を入力してください"
			});
		}
	}
	render() {
		// requiredValue={this.Validation} でコールバック通知を受け取る
		return (
			<div className="form-entry">
				<table>
					{/*<ImageUpload />*/}
					<FormInputRequired requiredValue={this.Validation} title={'お名前'} type={'text'} name={'name'}
									   ph={'例：サンプル太郎'} error={'名前を入力してください'} erch={this.state.errorCheck_name}/>
					<FormPref requiredValue={this.Validation} error={'都道府県を選択してください'}
							  erch={this.state.errorCheck_pref}/>
					<FormInputRequired requiredValue={this.Validation} title={'メールアドレス'} type={'email'} name={'mail'}
									   ph={'例：sample@sample.com'} error={'正しいメールアドレスを入力してください'}
									   erch={this.state.errorCheck_mail}/>
					<FileUploadModal />
				</table>
				<FormSend value={this.state.sendVal} disabled={this.state.disabled}/>
			</div>
		);
	}
}



//class FormInputRequired extends React.Component
// 汎用input必須
class FormInputRequired extends React.Component{
	static defaultProps = {
		type: 'text'
	}
	static propTypes = {
		title: React.PropTypes.string,
		type: React.PropTypes.string.isRequired,
		name: React.PropTypes.string,
		ph: React.PropTypes.string
	}
	constructor(props) {
		super(props);
		// this.state = {
		// 	name: this.props.type
		// }
		this.requiredValidat = this.requiredValidat.bind(this);

	}
	// 入力の有無を確認
	requiredValidat(event){
		// フォームのname属性値を取得
		var type = event.target.name;
		// フォームの入力値を取得
		var val = event.target.value;
		// 取得した値を受け渡せるようにコールバック関数を使う
		this.props.requiredValue(type, val, event);
	}
	render() {
		return (
			<tr>
				<th>{this.props.title}<span className="required">必須</span></th><td><input type={this.props.type} name={this.props.name} ref={this.props.name} placeholder={this.props.ph}
																						  value={this.props.value} onChange={this.requiredValidat} onBlur={this.requiredValidat} required
			/><span className={this.props.erch}>{this.props.error}</span></td>
			</tr>
		);
	}
}

// FormInputRequired.propTypes = {
// 	title: React.PropTypes.string,
// 	type: React.PropTypes.string.isRequired,
// 	name: React.PropTypes.string,
// 	ph: React.PropTypes.string
// };
// FormInputRequired.User.defaultProps  = {
// 	type: 'text'
// };




// getDefaultProps: function() {
//     return {
//         type: 'text'
//     };
// },
// // porpsの型を定義する
// propTypes:{
//     title: React.PropTypes.string,
//         type: React.PropTypes.string.isRequired,
//         name: React.PropTypes.string,
//         ph: React.PropTypes.string
// },

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

class SendData extends  React.Component {
	constructor(){
		super();
		this.state = {
			_token: "JiJ7WOIiM5399Ej3Ox9Xz8dpXlV7INlreMFIDFzV",
			email: "fatty.rabbit.75@gmail.com",
			carrierText: "キャリア",
			makerText: "メーカー",
			modelText: "機種名",
			colorText: "カラー",
			storageText: "容量",
			status: "1",
			period: "使用期間",
			details: "詳細入力"
		};
		this._handleFileData = this._handleFileData.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
	}
	_handleFileData(file) {
		this.setState ({
			file: file
		});
	}
	_handleSubmit() {
		console.log(this.state.file);
	}
	render() {
		return (
			<form method="POST" action="http://hikaku-jan.com/backend/api/estimate" accept-charset="UTF-8" id="register-estimate" enctype="multipart/form-data">
				<input name="_token" type="hidden" defaultValue="JiJ7WOIiM5399Ej3Ox9Xz8dpXlV7INlreMFIDFzV" />
				<FileUploadModal onFileData={this._handleFileData} />
				<input name="email" type="email" defaultValue="fatty.rabbit.75@gmail.com" />
				<input name="carrier" type="text" defaultValue="キャリア" />
				<input name="maker" type="text" defaultValue="メーカー" />
				<input name="model" type="text" defaultValue="機種名" />
				<input name="color" type="text" defaultValue="カラー" />
				<input name="storage" type="text" defaultValue="容量" />
				<input id="status-1" checked="checked" name="status" type="radio" defaultValue="1" />
				<label for="status-1">キズあり</label>
				<input id="status-2" name="status" type="radio" defaultValue="2" />
				<label for="status-2">破損あり</label>
				<input id="status-3" name="status" type="radio" defaultValue="3" />
				<label for="status-3">見た感じない</label>
				<input name="period" type="text" defaultValue="使用期間" />
				<input name="details" type="text" defaultValue="詳細入力" />
				<button onClick={this._handleSubmit} type="button">登録</button>
			</form>
		);
	}
}

class Form extends React.Component {
	render() {
		const meta = {
			title: 'Form',
			description: 'Formの説明',
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
				{/*<Header />*/}
				<h1>formが出たぞ！</h1>
				{/*<FormApp />*/}
				<SendData />
			</div>
		);
	}
}

class Top extends React.Component {
	render() {
		return <div>
		{/*<CommentBox url="api/test.json" pollInterval={2000} />,*/}
		<Header title="tesutotesuto"/>, {/*titleでh1渡せる*/}
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











