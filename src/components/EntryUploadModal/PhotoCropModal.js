import React, { Component } from 'react';
import Modal from 'react-modal';
import ReactCrop from 'react-image-crop';
import styled from 'styled-components';

import MinimalButton from 'kt-components/MinimalButton';

class PhotoCropModal extends Component {
    render() {
        return (

            <Modal
                contentLabel='Photo Crop Modal'
                isOpen={!!this.props.currentImage.originalImageSource && !this.props.currentImage.croppedImageSource}
                style={{
                    overlay: {backgroundColor: 'rgba(10, 10, 10, 0.60)'},
                    content: {bottom: 'unset', width: '600px'}
                }}
                onRequestClose={() => {this.setState({imageSource: null})}}
            >
            {this.props.currentImage.originalImageSource
            ? <ReactCrop
                onComplete={(crop) => {
                this.setState({crop})
                }}
                crop={this.props.crop}
                src={this.props.currentImage.originalImageSource}/>
            : null}
            <DoneButton onClick={() => this.props.cropImage()}>Done</DoneButton>
            </Modal>
        );
    }
}

export default PhotoCropModal;

const DoneButton = styled(MinimalButton)`
   background: ${props => props.theme.main};
   font: ${props => props.theme.mainFont({})};
   margin: 30px auto;
   color: white;
   font-size: 16pt;
   padding: 10px 60px;
   border-radius: 30px;
   border-style: none;
`