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
    constructor () {
        super();

        this.state = {open:false};

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

    }

    openModal () { this.setState({open: true}); }

    closeModal () { this.setState({open: false}); }

    render () {
        return (
            <div>
                <button onClick={this.openModal}>Open Modal</button>
                <Modal isOpen={this.state.open} onRequestClose={this.closeModal}>
                    <button onClick={this.closeModal}>Close</button>
                    <ImageUpload />
                </Modal>
            </div>
        );
    }
}