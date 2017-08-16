import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import dataURLtoBlob from 'dataurl-to-blob';

import PhotoCropModal from './PhotoCropModal'

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
    }

    // this event runs only when a file is first uploaded to the input element
    handleFileUpload(event) {
      // get file off of input element
      const file = event.target.files[0]
      // create file reader object
      const reader = new FileReader()
      // configure reader with the logic that runs after it has loaded a file
      reader.onloadend = () => {
        this.setState({
          uploadedFile: file,
          uploadedFileDataURL: reader.result,
          modalIsOpen: true
        })
      }
      // read the file - when this finishes it will run the logic defined above
      reader.readAsDataURL(file);
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
        return (
            <ImgThumbnail imgUrl={croppedImageURL || croppedImageDataURL}>
                <ImgInput
                    type='file'
                    onChange={this.handleFileUpload}
                />
                <PhotoCropModal
                    createCroppedImageFile={this.createCroppedImageFile}
                    uploadedFileDataURL={uploadedFileDataURL}
                    modalIsOpen={modalIsOpen}
                />
            </ImgThumbnail>
        )
    }
}

export default PhotoUpload;

const ImgThumbnail = styled.div`
    background: url(${props => props.imgUrl});
    background-size: contain;
    border: 3px solid #d9d9d9;
    height: 90px;
    width: 90px;
    border-radius: 5px;
    margin: 0 10px;
    &:hover{
        background: ${props => props.theme.main};
        border-color: ${props => props.theme.main};
    }
`
const ImgInput = styled.input`
    opacity: 0;
    height: 90px;
    width: 90px;
`
