import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ReactCrop from 'react-image-crop';
import dataURLtoBlob from 'dataurl-to-blob';

import 'react-image-crop/dist/ReactCrop.css'

export default class ReactImageCropper extends Component {
    constructor(props) {
        super(props);

        this.state={
            cropDimensions: {
                x: 0,
                y:0,
                width: 40,
                height: 40,
                aspect: 1/1
            }
        }

        this.updateDimensions = this.updateDimensions.bind(this);
        this.cropImage = this.cropImage.bind(this);
    }

    updateDimensions(newCropDimensions) {
      this.setState({
        cropDimensions: newCropDimensions
      })
    }

    // gets called by PhotoCropModal component when user clicks done button
    cropImage() {
      let { file, base64 } = this.props

      if(!base64) {
        let reader = new FileReader();
        reader.onloadend = e => {
          base64 = reader.result;
        }
        reader.readAsDataURL(file);
      }

      // this is passed to the canvas element during image drawing
      let canvasImage = new Image()
      // create canvas element
      let canvas = document.createElement('canvas');
      // configure canvas image with the logic to run when the image is loading it's src
      canvasImage.onload = () => {
        // destructure crop dimensions from state
        let { x, y, width, height } = this.state.cropDimensions;
        // Calculate crop dimmensions
        let imageWidth = canvasImage.naturalWidth;
        let imageHeight = canvasImage.naturalHeight;
        let cropX = (x / 100) * imageWidth;
        let cropY = (y / 100) * imageHeight;
        let cropWidth = (width / 100) * imageWidth;
        let cropHeight = (height / 100) * imageHeight;
        // set canvas settings
        canvas.width = cropWidth;
        canvas.height = cropHeight;
        let ctx = canvas.getContext('2d');
        // draw cropped image to canvas object
        ctx.drawImage(
          canvasImage, cropX, cropY, cropWidth,
          cropHeight, 0, 0, cropWidth, cropHeight
        )

        let imageBase64 = canvas.toDataURL('image/jpeg')
        let blob = dataURLtoBlob(imageBase64)
        let imageFile = new File([blob], file.name, {type:'image/jpeg'})

        this.props.handleImage({imageFile,imageBase64})
      }
      // set the source for canvas image
      canvasImage.src = base64
    }

  render() {
    const {cropDimensions} = this.state
    const {modalOpen, base64} = this.props

    const modalStyle = {
        overlay: {backgroundColor: 'rgba(10, 10, 10, 0.60)'},
        content: {bottom: 'unset', background: '#fff'}
    }

    if(base64) {
      return (
        <Modal
          contentLabel='Photo Crop Modal'
          isOpen={modalOpen}
          style={modalStyle}
        >
          <ReactCrop
            crop={cropDimensions}
            src={base64}
            onComplete={this.updateDimensions}
          />
          <Footer>
            <SubmitButton onClick={this.cropImage}>
              Save
            </SubmitButton>
          </Footer>
        </Modal>
      )
    }
    return null;
  }
}

ReactImageCropper.propTypes = {
  file: PropTypes.object.isRequired,
  base64: PropTypes.string,
  handleImage: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired
}

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-bottom: 6px solid ${props => props.theme.main};
`
const SubmitButton = styled.button`
  border: solid .5px;
  border-radius: 20px;
  padding: 5px 12px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: none;
  background-color: ${props => props.theme.main};
  border-color: ${props => props.theme.main};
  color: white;
  font-size: 12pt;
  font-weight: 400;
  &:hover {
    background: #B20E0D;
    color: white;
  }
`
