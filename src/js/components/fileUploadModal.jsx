import React from "react";
import Modal from 'react-modal';
import ImageUpload from './fileUpload'

export default class FileUploadModal extends React.Component {
    constructor (props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleSelectImage = this.handleSelectImage.bind(this);
        this.state = {
            open: false,
            imagePreviewUrl: '',
            imageFileData: ''
        };
    }
    openModal (props) {
        this.setState({open: true});
    }

    closeModal () { this.setState({open: false}); }

    //onSelectImage={this.handleSelectImage}
    //親のStateを子のPropとして渡す functionとして渡して子で実行のみするimage
    //onSelectImage={this.handleSelectImage}
    //子でthis.props.onSelectImage();
    handleSelectImage(imagePreviewUrl,imageFileData) {
        this.setState ({
            imagePreviewUrl: imagePreviewUrl,
            imageFileData: imageFileData
        });
        this.props.onFileData(imageFileData);
    }

    render () {
        // let {imagePreviewUrl} = this.state.imagePreviewUrl;
        let selectImgStyle = {
            backgroundImage: 'url(' + this.state.imagePreviewUrl + ')'
        };
        // let $imagePreview = null;
        // if (imagePreviewUrl) {
        //     $imagePreview = (<img src={imagePreviewUrl} />);
        // } else {
        //     $imagePreview = (<div className="previewText">写真を選択して下さい</div>);
        // }
        return (
            <div>
                <div id={this.props.arrayNum} style={selectImgStyle} onClick={this.openModal}>Open Modal</div>
                <Modal
                    className="ModalClass"
                    overlayClassName="OverlayClass"
                    isOpen={this.state.open}
                    onRequestClose={this.closeModal}
                >
                    <h1>Styled Using Classes Modal</h1>
                    <button onClick={this.closeModal}>Close</button>
                    <div>
                        <ImageUpload data={this.state.imageFileData} url={this.state.imagePreviewUrl} onSelectImage={this.handleSelectImage} inputArrayNum={this.props.arrayNum}/>
                    </div>
                </Modal>
            </div>
        );
    }
}



