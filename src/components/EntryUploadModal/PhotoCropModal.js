import React, { Component } from 'react';
import Modal from 'react-modal';
import ReactCrop from 'react-image-crop';
import styled from 'styled-components';

import 'react-image-crop/dist/ReactCrop.css'

import MinimalButton from 'kt-components/MinimalButton';

class PhotoCropModal extends Component {
    constructor(props) {
        super(props);

        this.state={
            crop: {
                x: 0,
                y:0,
                width: 40,
                aspect: 1/1
            }
        }
    }
    render() {
        const {crop} = this.state
        const {modalIsOpen, currentImage, cropImage} = this.props

        const modalStyle = {
            overlay: {backgroundColor: 'rgba(10, 10, 10, 0.60)'},
            content: {bottom: 'unset', width: '600px', background: '#fff'}
        }

        return (
            <Modal
                contentLabel='Photo Crop Modal'
                isOpen={modalIsOpen && !!currentImage}
                style={modalStyle}
            >
                {
                currentImage ? 
                    <ReactCrop
                        onComplete={crop => {
                            this.setState({crop})
                        }}
                        crop={crop}
                        src={currentImage}
                    />
                    : 
                    null
                }
                <DoneButton onClick={() => cropImage(crop)}>
                    Done
                </DoneButton>
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