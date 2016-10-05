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

    handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        this.setState({
            file: '',
            imagePreviewUrl:''
        });
        //サムネイルリセット
        this.props.onSelectImage('');
    }

    componentWillMount() {
        if(this.props.data != '') {
            console.log('通った');
            this.setState({
                file: this.props.data,
                imagePreviewUrl: this.props.url
            });
        }
    }

    handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        //fileleader html5api
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
            this.props.onSelectImage(this.state.imagePreviewUrl,this.state.file);
        };
        //dataurl変換ぽいね
        reader.readAsDataURL(file);
    }

    render() {
        // console.log(this.state.imagePreviewUrl);

        //{}オブジェクト化することに良りdataをいれてるのか？？
        // let {imagePreviewUrl} = this.state;
        // let $imagePreview = null;
        // if (imagePreviewUrl) {
        //     $imagePreview = (<img src={imagePreviewUrl} />);
        // } else {
        //     $imagePreview = (<span className="previewText">写真を選択して下さい</span>);
        // }

        // let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (this.state.imagePreviewUrl) {
            $imagePreview = (<img src={this.state.imagePreviewUrl} />);
        } else {
            $imagePreview = (<span className="previewText">写真を選択して下さい</span>);
        }
        return (
            <div className="previewComponent">
                {/*<form onSubmit={(e)=>this.handleSubmit(e)}>*/}
                    <label htmlFor="fileInput">fileupload</label>
                    <input id="fileInput" className="fileInput" type="file" onChange={(e)=>this.handleImageChange(e)} />
                    {/*<button className="submitButton" type="submit" onClick={(e)=>this.handleSubmit(e)}>Upload Image</button>*/}
                    <span className={this.state.file == '' ? "deleteButton is-disable" : "deleteButton "} onClick={(e)=>this.handleSubmit(e)}>写真を削除</span>
                {/*</form>*/}
                <div className="imgPreview">
                    {$imagePreview}
                </div>
            </div>
        )
    }
}





