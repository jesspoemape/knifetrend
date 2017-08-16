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
            reactCropSettings: {
                x: 0,
                y:0,
                width: 40,
                aspect: 1/1
            }
        }

        this.recordReactCropSettings = this.recordReactCropSettings.bind(this);
    }

    recordReactCropSettings(newCropSettings) {
      this.setState({
        reactCropSettings: newCropSettings
      })
    }

    render() {
        const {reactCropSettings} = this.state
        const {modalIsOpen, uploadedFileDataURL, createCroppedImageFile} = this.props

        const modalStyle = {
            overlay: {backgroundColor: 'rgba(10, 10, 10, 0.60)'},
            content: {bottom: 'unset', width: '600px', background: '#fff'}
        }

        return (
            <Modal
              contentLabel='Photo Crop Modal'
              isOpen={modalIsOpen && !!uploadedFileDataURL}
              style={modalStyle}
            >
                {
                uploadedFileDataURL ?
                    <ReactCrop
                        onComplete={this.recordReactCropSettings}
                        crop={reactCropSettings}
                        src={uploadedFileDataURL}
                    />
                    :
                    null
                }
                <DoneButton onClick={() => createCroppedImageFile(reactCropSettings)}>
                    Done
                </DoneButton>
            </Modal>
        )
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
