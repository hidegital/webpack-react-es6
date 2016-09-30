import React from "react";
// import style from  '../stylus/layout/header.styl'
// import style from  '../../stylus/layout/header.styl'

// export default class Test extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: {
//                 mail: null,
//                 url: null
//             },
//             // バリデーションエラー時のメッセージ {string}
//             message: {
//                 mail: null,
//                 url: null
//             },
//             // フォームのバリデーションの状態 {boolean}
//             status: {
//                 mail: null,
//                 url: null
//             }
//         };
//
//         // this.handleClick = this.handleClick.bind(this);
//
//     }
//     render() {
//         let mail = {
//             mail: this.state.data.mail,
//             error: this.state.message.mail,
//             checkValue: this.checkValue
//         };
//         let url = {
//             url: this.state.data.url,
//             error: this.state.message.url,
//             checkValue: this.checkValue
//         };
//         let button = {
//             mail: this.state.status.mail,
//             url: this.state.status.url,
//             sendData: this.sendData
//         };
//         return (
//             <ul>
//                 <FormMail {...mail} />
//                 <FormUrl {...url} />
//                 <FormButton {...button} />
//             </ul>
//         )
//     }
// }

//
export const FormApp = React.createClass({
    getInitialState() {
        return {
            // フォームに入力される値 {string}
            data: {
                mail: null,
                url: null
            },
            // バリデーションエラー時のメッセージ {string}
            message: {
                mail: null,
                url: null
            },
            // フォームのバリデーションの状態 {boolean}
            status: {
                mail: null,
                url: null
            }
        };
    },
    render() {
        let mail = {
            mail: this.state.data.mail,
            error: this.state.message.mail,
            checkValue: this.checkValue
        };
        let url = {
            url: this.state.data.url,
            error: this.state.message.url,
            checkValue: this.checkValue
        };
        let button = {
            mail: this.state.status.mail,
            url: this.state.status.url,
            sendData: this.sendData
        };
        return (
            <ul>
                <li>testtest</li>
                <FormMail {...mail} />
                <FormUrl {...url} />
                <FormButton {...button} />
            </ul>
        );
    }
});

