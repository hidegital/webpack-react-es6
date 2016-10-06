import React from "react";
import Modal from 'react-modal';
import ImageUpload from './fileUpload'


export default class FileUploadModal extends React.Component {
    constructor (props) {
        super(props);
        this.openModalOne = this.openModalOne.bind(this);
        this.closeModalOne = this.closeModalOne.bind(this);
        this.openModalTwo = this.openModalTwo.bind(this);
        this.closeModalTwo = this.closeModalTwo.bind(this);

        this.handleSelectImageOne = this.handleSelectImageOne.bind(this);
        this.handleSelectImageTwo = this.handleSelectImageTwo.bind(this);

        this.state = {
            // open: false,
            openOne: false,
            openTwo: false,

            imagePreviewUrlOne: '',
            imagePreviewUrlTwo: '',

            imageFileDataOne: '',
            imageFileDataTwo: '',

            imageFileDataAll: {}
        };
    }


    openModalOne (props) {this.setState({openOne: true});}
    openModalTwo (props) { this.setState({openTwo: true});}

    closeModalOne () { this.setState({openOne: false}); }
    closeModalTwo () { this.setState({openTwo: false}); }

    //onSelectImage={this.handleSelectImage}
    //親のStateを子のPropとして渡す functionとして渡して子で実行のみするimage
    //onSelectImage={this.handleSelectImage}
    //子でthis.props.onSelectImage();


    //imageFileDataAllをオブジェクトに変えてみるしかないかな。
    //todo 中身function
    handleSelectImageOne(imagePreviewUrl,imageFileData,deleteNum) {

        if(deleteNum) {
            // console.log('aaaa');
            this.setState({
                imagePreviewUrlOne: '',
                imageFileDataOne: '',
                // imageFileDataAll: this.state.imageFileDataAll.splice(deleteNum,1)
                imageFileDataAll: delete this.state.imageFileDataAll.a
            });
            // if(this.state.imageFileDataAll == [])
        }else{
            // console.log('bbbbb');
            this.setState({
                imagePreviewUrlOne: imagePreviewUrl,
                imageFileDataOne: imageFileData,
                // imageFileDataAll: this.state.imageFileDataAll.concat([imageFileData])
                imageFileDataAll: this.state.imageFileDataAll = {a:imageFileData}
            });
        }
        this.props.onFileData(this.state.imageFileDataAll);
        // console.log(this.state.imageFileDataAll);
    }

    //ここ怪しい
    handleSelectImageTwo(imagePreviewUrl,imageFileData,targetNum) {
        if(targetNum) {
            this.setState({
                imagePreviewUrlTwo: '',
                imageFileDataTwo: '',
                imageFileDataAll: this.state.imageFileDataAll.splice(targetNum,1)
            });
            // if(this.state.imageFileDataAll == [])
        }else {
            this.setState({
                imagePreviewUrlTwo: imagePreviewUrl,
                imageFileDataTwo: imageFileData,
                imageFileDataAll: this.state.imageFileDataAll.concat([imageFileData])
            });
        }
        this.props.onFileData(this.state.imageFileDataAll);
    }


    render () {
        let selectImgStyleOne = {backgroundImage: 'url(' + this.state.imagePreviewUrlOne + ')'};
        let selectImgStyleTwo = {backgroundImage: 'url(' + this.state.imagePreviewUrlTwo + ')'};
        return (
            <div>
                <div style={selectImgStyleOne} onClick={this.openModalOne}>Open Modal one</div>
                <div style={selectImgStyleTwo} onClick={this.openModalTwo}>Open Modal two</div>
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
            </div>
        );
    }
}










