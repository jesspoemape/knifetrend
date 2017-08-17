import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import ReactSVG from 'react-svg'
import ReactFileReader from 'react-file-reader';
import dataURLtoBlob from 'dataurl-to-blob';

import PhotoCropModal from './PhotoCropModal'
import plus from './../../assets/plus.svg'

class PhotoUpload extends Component{
    constructor (props) {
        super(props)

        this.state = {
            uploadedFile: null,
            uploadedFileDataURL: null,
            croppedImageFile: null,
            croppedImageDataURL: null,
            croppedImageURL: '',
            modalIsOpen: false,
        }

        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.createCroppedImageFile = this.createCroppedImageFile.bind(this);
        this.sendFile = this.sendFile.bind(this);
        this.openCropper = this.openCropper.bind(this);
    }
    openCropper() {
      this.setState({
        modalIsOpen: true
      })
    }
    // this event runs only when a file is first uploaded to the input element
    handleFileUpload(file) {
      this.setState({
        uploadedFile: file.fileList,
        uploadedFileDataURL: file.base64,
        modalIsOpen: true
      })
    }

    // gets called by PhotoCropModal component when user clicks done button
    createCroppedImageFile(cropSettings) {
      let { uploadedFile, uploadedFileDataURL } = this.state
      // const reader = new FileReader()
      // this is passed to the canvas element during image drawing
      let canvasImage = new Image()
      // create canvas element
      let canvas = document.createElement('canvas');
      // configure canvas image with the logic to run when the image is loading it's src
      canvasImage.onload = () => {
        // destructure crop settings passed to createCroppedImageFile method
        let { x, y, width, height } = cropSettings
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
      }
      // set the source for canvas image
      canvasImage.src = uploadedFileDataURL
      // create function to be used as callback when we call canvas.toBlob()
      const convertAndSendFile = () => {
        // canvas to dataURL
        const croppedImageDataURL = canvas.toDataURL('image/jpeg')
        // convert dataURL to blob
        const blob = dataURLtoBlob(croppedImageDataURL)
        // create new file object from blob
        const croppedImageFile = new File([blob], uploadedFile.name, {type:'image/jpeg'})
        this.setState({
          croppedImageFile: croppedImageFile,
          croppedImageDataURL: croppedImageDataURL,
          modalIsOpen: false
        })
        // send the server to be uploaded on s3
        this.sendFile(croppedImageFile)
      }
      // create blob - this will trigger the above callback and create a new file
      canvas.toBlob(convertAndSendFile, 'image/jpeg')
    }

    sendFile(file) {
      let data = new FormData()
      data.append('image', file)
      axios.post(`${process.env.REACT_APP_SERVER_URL}/upload`, data)
        .then(response => {
          this.setState({
            croppedImageURL: response.data.imgUrl
          })
        })
    }

    render() {
        const{ uploadedFileDataURL, croppedImageDataURL, croppedImageURL, modalIsOpen } = this.state;
        const { children } = this.props;
        return (
            <ImagePreview imgUrl={croppedImageURL || croppedImageDataURL} onClick={ this.openCropper }>
              { !croppedImageURL ?
                <ReactFileReader base64={true} handleFiles={this.handleFileUpload}>
                  <PlusIcon path={plus} />
                </ReactFileReader>
                :
                ''
              }

                <PhotoCropModal
                    createCroppedImageFile={this.createCroppedImageFile}
                    uploadedFileDataURL={uploadedFileDataURL}
                    modalIsOpen={modalIsOpen}
                />
            </ImagePreview>
        )
    }
}

export default PhotoUpload;

const ImagePreview = styled.div`
  background: url(${props => props.imgUrl});
  background-size: contain;
  border: 3px solid #d9d9d9;
  height: 90px;
  width: 90px;
  border-radius: 5px;
  margin: 0 10px;
  cursor: pointer;
`

const PlusIcon = styled(ReactSVG)`
  display: flex;
  align-items: center;
  justify-content: center;
  stroke: black;
  width: 28px;
  height: 28px;
  cursor: pointer;
`
