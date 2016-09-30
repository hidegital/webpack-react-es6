//todo これをもとに
import React from "react";

//ここでglobal変数で格納するか？？


export default class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl: ''};
    }

    handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log(this.state.file);
    }

    handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        };
        reader.readAsDataURL(file)
        //globalをかえる？？
    }

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">写真を選択して下さい</div>);
        }

        return (
            <div className="previewComponent">
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <input className="fileInput" type="file" onChange={(e)=>this.handleImageChange(e)} />
                    <button className="submitButton" type="submit" onClick={(e)=>this.handleSubmit(e)}>Upload Image</button>
                </form>
                <div className="imgPreview">
                    {$imagePreview}
                </div>
            </div>
        )
    }
}