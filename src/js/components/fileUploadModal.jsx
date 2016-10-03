import React from "react";
import Modal from 'react-modal';
import ImageUpload from './fileUpload'

export default class FileUploadModal extends React.Component {
    // constructor () {
    //     super();
    //     this.openModal = this.openModal.bind(this);
    //     this.closeModal = this.closeModal.bind(this);
    // }
    // openModal () { this.setState({open: true}); }
    //
    // closeModal () { this.setState({open: false}); }
    //
    // render () {
    //     return (
    //         <div>
    //             <button onClick={this.openModal}>Open Modal</button>
    //             <Modal
    //                 className="ModalClass"
    //                 overlayClassName="OverlayClass"
    //                 isOpen={this.state.open}
    //                 onRequestClose={this.closeModal}
    //             >
    //                 <h1>Styled Using Classes Modal</h1>
    //                 <button onClick={this.closeModal}>Close</button>
    //                 <input />
    //                 <input />
    //             </Modal>
    //         </div>
    //     );
    // }
    // constructor () {
    //     super();
    //
    //     this.state = {
    //         open: false
    //     };
    //
    //     this.openModal = this.openModal.bind(this);
    //     this.closeModal = this.closeModal.bind(this);
    //     console.log(this.state.imagePreviewUrl);
    //
    // }
    //
    // handleSelectImage(imagePreviewUrl) {
    //     // TODO: submit to the server and refresh the list
    //     console.log(imagePreviewUrl);
    // }
    //
    // openModal () { this.setState({open: true}); }
    //
    // closeModal () { this.setState({open: false}); }
    //
    // render () {
    //     return (
    //         <div>
    //             {/*<button onClick={this.openModal}>Open Modal</button>*/}
    //             <div onClick={this.openModal}>Open Modal</div>
    //             <Modal isOpen={this.state.open} onRequestClose={this.closeModal}>
    //                 <button onClick={this.closeModal}>Close</button>
    //                 <ImageUpload onSelectImage={this.handleSelectImage}/>
    //             </Modal>
    //         </div>
    //     );
    // }


    constructor () {
        super();
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleSelectImage = this.handleSelectImage.bind(this);
        this.state = {
            open: false,
            imagePreviewUrl: '',
            imageFileData: ''
        };
    }

    openModal () {
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
                <div style={selectImgStyle} onClick={this.openModal}>Open Modal</div>
                <Modal
                    className="ModalClass"
                    overlayClassName="OverlayClass"
                    isOpen={this.state.open}
                    onRequestClose={this.closeModal}
                >
                    <h1>Styled Using Classes Modal</h1>
                    <button onClick={this.closeModal}>Close</button>

                    <div>
                        <ImageUpload data={this.state.imageFileData} url={this.state.imagePreviewUrl} onSelectImage={this.handleSelectImage}/>
                    </div>
                </Modal>
            </div>
        );
    }
}

