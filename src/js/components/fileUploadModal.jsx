import React from "react";
import Modal from 'react-modal';
import ImageUpload from './fileUpload'


export default class FileUploadModal extends React.Component {
    constructor (props) {
        super(props);

        this.openModalOne = this.openModalOne.bind(this);
        this.openModalTwo = this.openModalTwo.bind(this);
        this.openModalThree = this.openModalThree.bind(this);
        this.openModalFour = this.openModalFour.bind(this);
        this.openModalFive = this.openModalFive.bind(this);

        this.closeModalOne = this.closeModalOne.bind(this);
        this.closeModalTwo = this.closeModalTwo.bind(this);
        this.closeModalThree = this.closeModalThree.bind(this);
        this.closeModalFour = this.closeModalFour.bind(this);
        this.closeModalFive = this.closeModalFive.bind(this);

        this.handleSelectImageOne = this.handleSelectImageOne.bind(this);
        this.handleSelectImageTwo = this.handleSelectImageTwo.bind(this);
        this.handleSelectImageThree = this.handleSelectImageThree.bind(this);
        this.handleSelectImageFour = this.handleSelectImageFour.bind(this);
        this.handleSelectImageFive = this.handleSelectImageFive.bind(this);

        this.state = {
            // open: false,
            openOne: false,
            openTwo: false,
            openThree: false,
            openFour: false,
            openFive: false,

            imageUploadFlgOne: false,
            imageUploadFlgTwo: false,
            imageUploadFlgThree: false,
            imageUploadFlgFour: false,
            //fiveはいらない

            imagePreviewUrlOne: '',
            imagePreviewUrlTwo: '',
            imagePreviewUrlThree: '',
            imagePreviewUrlFour: '',
            imagePreviewUrlFive: '',

            imageFileDataOne: '',
            imageFileDataTwo: '',
            imageFileDataThree: '',
            imageFileDataFour: '',
            imageFileDataFive: ''

        };
    }

    openModalOne   (props) { this.setState({openOne: true});}
    openModalTwo   (props) {
        if(this.state.imageUploadFlgOne) {
            this.setState({openTwo: true});
        }
    }
    openModalThree (props) {
        if(this.state.imageUploadFlgTwo) {
            this.setState({openThree: true});
        }
    }
    openModalFour  (props) {
        if(this.state.imageUploadFlgThree) {
            this.setState({openFour: true});
        }
    }
    openModalFive  (props) {
        if(this.state.imageUploadFlgFour) {
            this.setState({openFive: true});
        }
    }

    closeModalOne   () { this.setState({openOne: false}); }
    closeModalTwo   () { this.setState({openTwo: false}); }
    closeModalThree () { this.setState({openThree: false}); }
    closeModalFour  () { this.setState({openFour: false}); }
    closeModalFive  () { this.setState({openFive: false}); }

    //onSelectImage={this.handleSelectImage}
    //親のStateを子のPropとして渡す functionとして渡して子で実行のみするimage
    //onSelectImage={this.handleSelectImage}
    //子でthis.props.onSelectImage();

    //todo 中身function
    handleSelectImageOne(imagePreviewUrl,imageFileData,deleteNum) {
        if(deleteNum) {
            this.setState({
                imagePreviewUrlOne: '',
                imageFileDataOne: '',
                imageUploadFlgOne: false
            });
            this.props.onFileData('','a',true);
        }else{
            this.setState({
                imagePreviewUrlOne: imagePreviewUrl,
                imageFileDataOne: imageFileData,
                imageUploadFlgOne: true
            });
            this.props.onFileData(this.state.imageFileDataOne,'a',false);
        }
    }
    handleSelectImageTwo(imagePreviewUrl,imageFileData,deleteNum) {
        if(deleteNum) {
            this.setState({
                imagePreviewUrlTwo: '',
                imageFileDataTwo: ''
            });
            this.props.onFileData('','b',true);
        }else {
            this.setState({
                imagePreviewUrlTwo: imagePreviewUrl,
                imageFileDataTwo: imageFileData
            });
            this.props.onFileData(this.state.imageFileDataTwo,'b', false);
        }
    }
    handleSelectImageThree(imagePreviewUrl,imageFileData,deleteNum) {
        if(deleteNum) {
            this.setState({
                imagePreviewUrlThree: '',
                imageFileDataThree: ''
            });
            this.props.onFileData('','c',true);
        }else {
            this.setState({
                imagePreviewUrlThree: imagePreviewUrl,
                imageFileDataThree: imageFileData
            });
            this.props.onFileData(this.state.imageFileDataThree,'c', false);
        }
    }
    handleSelectImageFour(imagePreviewUrl,imageFileData,deleteNum) {
        if(deleteNum) {
            this.setState({
                imagePreviewUrlFour: '',
                imageFileDataFour: ''
            });
            this.props.onFileData('','d',true);
        }else {
            this.setState({
                imagePreviewUrlFour: imagePreviewUrl,
                imageFileDataFour: imageFileData
            });
            this.props.onFileData(this.state.imageFileDataFour,'d', false);
        }
    }
    handleSelectImageFive(imagePreviewUrl,imageFileData,deleteNum) {
        if(deleteNum) {
            this.setState({
                imagePreviewUrlFive: '',
                imageFileDataFive: ''
            });
            this.props.onFileData('','e',true);
        }else {
            this.setState({
                imagePreviewUrlFive: imagePreviewUrl,
                imageFileDataFive: imageFileData
            });
            this.props.onFileData(this.state.imageFileDataFive,'e', false);
        }
    }
    render () {
        let selectImgStyleOne = {backgroundImage: 'url(' + this.state.imagePreviewUrlOne + ')'};
        let selectImgStyleTwo = {backgroundImage: 'url(' + this.state.imagePreviewUrlTwo + ')'};
        let selectImgStyleThree = {backgroundImage: 'url(' + this.state.imagePreviewUrlThree + ')'};
        let selectImgStyleFour = {backgroundImage: 'url(' + this.state.imagePreviewUrlFour + ')'};
        let selectImgStyleFive = {backgroundImage: 'url(' + this.state.imagePreviewUrlFive + ')'};
        return (
            <div>
                <div style={selectImgStyleOne} onClick={this.openModalOne}>Open Modal one</div>
                <div style={selectImgStyleTwo} onClick={this.openModalTwo}>Open Modal two</div>
                <div style={selectImgStyleThree} onClick={this.openModalThree}>Open Modal three</div>
                <div style={selectImgStyleFour} onClick={this.openModalFour}>Open Modal four</div>
                <div style={selectImgStyleFive} onClick={this.openModalFive}>Open Modal five</div>
                <Modal
                    isOpen={this.state.openOne}
                    onRequestClose={this.closeModalOne}
                >
                    <h1>Modal1</h1>
                    <button onClick={this.closeModalOne}>Close</button>
                    <div>
                        <ImageUpload data={this.state.imageFileDataOne} url={this.state.imagePreviewUrlOne} onSelectImage={this.handleSelectImageOne} inputArrayNum="0" />
                    </div>
                </Modal>
                <Modal
                    isOpen={this.state.openTwo}
                    onRequestClose={this.closeModalTwo}
                >
                    <h1>Modal2</h1>
                    <button onClick={this.closeModalTwo}>Close</button>
                    <div>
                        <ImageUpload data={this.state.imageFileDataTwo} url={this.state.imagePreviewUrlTwo} onSelectImage={this.handleSelectImageTwo} inputArrayNum="1" />
                    </div>
                </Modal>
                <Modal
                    isOpen={this.state.openThree}
                    onRequestClose={this.closeModalThree}
                >
                    <h1>Modal3</h1>
                    <button onClick={this.closeModalThree}>Close</button>
                    <div>
                        <ImageUpload data={this.state.imageFileDataThree} url={this.state.imagePreviewUrlThree} onSelectImage={this.handleSelectImageThree} inputArrayNum="2" />
                    </div>
                </Modal>
                <Modal
                    isOpen={this.state.openFour}
                    onRequestClose={this.closeModalFour}
                >
                    <h1>Modal4</h1>
                    <button onClick={this.closeModalFour}>Close</button>
                    <div>
                        <ImageUpload data={this.state.imageFileDataFour} url={this.state.imagePreviewUrlFour} onSelectImage={this.handleSelectImageFour} inputArrayNum="2" />
                    </div>
                </Modal>
                <Modal
                    isOpen={this.state.openFive}
                    onRequestClose={this.closeModalFive}
                >
                    <h1>Modal5</h1>
                    <button onClick={this.closeModalFive}>Close</button>
                    <div>
                        <ImageUpload data={this.state.imageFileDataFive} url={this.state.imagePreviewUrlFive} onSelectImage={this.handleSelectImageFive} inputArrayNum="2" />
                    </div>
                </Modal>
            </div>
        );
    }
}







