//todo これをもとに
import React from "react";

//ここでglobal変数で格納するか？？
//否親componentに渡すべきだ

export default class ImageUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: ''
        };
    }

    componentWillMount() {
        // console.log(this.refs.filedata);
        if(this.props.data != '') {
            this.setState({
                file: this.props.data,
                imagePreviewUrl: this.props.url
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let target = this.refs.filedata;
        target.value = '';
        // console.log(target.files[0]);
        this.setState({
            file: '',
            imagePreviewUrl:''
        });
        //サムネイルリセット 実質inputArrayNum渡す必要も無い
        this.props.onSelectImage('','',this.props.inputArrayNum);
    }

    handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        //fileleader html5api
        // let file = e.target.files[0];
        let file = this.refs.filedata.files[0];
        //下記でも行けるか？？
        // let file = e.target.file;
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
            this.props.onSelectImage(this.state.imagePreviewUrl,this.state.file);
            // console.log(this.state.file);
        };
        //dataurl変換ぽいね
        reader.readAsDataURL(file);
        // console.log(file);
        // console.log(reader);
    }

    render() {
        //{}オブジェクト化することに良りdataをいれてるのか？？
        // let {imagePreviewUrl} = this.state;
        // let $imagePreview = null;
        // if (imagePreviewUrl) {
        //     $imagePreview = (<img src={imagePreviewUrl} />);
        // } else {
        //     $imagePreview = (<span className="previewText">写真を選択して下さい</span>);
        // }
        let $imagePreview = null;
        if (this.state.imagePreviewUrl) {
            $imagePreview = (<img src={this.state.imagePreviewUrl} />);
        } else {
            $imagePreview = (<span className="previewText">写真を選択して下さい</span>);
        }
        let nameArrayNum =  `image[${this.props.inputArrayNum}]`;
        return (
            <div className="previewComponent">
                <label htmlFor="fileInput">fileupload</label>
                {/*refで直接dom要素をいじる fileapiにアクセスするため*/}
                <input id="fileInput" ref="filedata" name={nameArrayNum} className="fileInput" type="file" onChange={(e)=>this.handleImageChange(e)} />
                <span className={this.state.file == '' ? "deleteButton is-disable" : "deleteButton "} onClick={(e)=>this.handleSubmit(e)}>写真を削除</span>
                <div className="imgPreview">
                    {$imagePreview}
                </div>
            </div>
        )
    }
}


