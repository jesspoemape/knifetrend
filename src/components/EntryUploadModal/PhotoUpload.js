import React, { Component } from 'react';
import styled from 'styled-components';

import PhotoCropModal from './PhotoCropModal'

class PhotoUpload extends Component{
    constructor (props) {
        super(props)

        this.state = {
            imgUrl: ' ',
            fileReaderResult: null,
            width: 40,
            aspect: 1/1,
            x: 0,
            y: 0,
            modalIsOpen: false
        }

        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.cropImage = this.cropImage.bind(this);
    }

    handleFileUpload(event) {
        let file = event.target.files[0] 
        let reader = new FileReader() 

        reader.onloadend = () => {
          this.setState({
            fileReaderResult: reader.result,
            modalIsOpen: true
          })
        }
        reader.readAsDataURL(file)

      }

cropImage(crop) {
    const {fileReaderResult} = this.state;
    const {onFinishUpload, id} = this.props;

    console.log('CROP', crop)
    console.log("STATE", this.state)

    let image = new Image();
    image.onload = () => {
        var imageWidth = image.naturalWidth;
		var imageHeight = image.naturalHeight;

		var cropX = (crop.x / 100) * imageWidth;
		var cropY = (crop.y / 100) * imageHeight;

		var cropWidth = (crop.width / 100) * imageWidth;
		var cropHeight = (crop.height / 100) * imageHeight;

		var canvas = document.createElement('canvas');
		canvas.width = cropWidth;
		canvas.height = cropHeight;
		var ctx = canvas.getContext('2d');

		ctx.drawImage(image, cropX, cropY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);

        // let imageSrc = canvas.toDataURL('image/jpeg')

        this.setState({
            width: cropWidth,
            x: cropX,
            y: cropY,
            modalIsOpen: false,
            imgUrl: canvas.toDataURL('image/jpeg')
        })
        const { imgUrl, width, aspect, x, y} = this.state;
        onFinishUpload({
            x,
            y,
            url: imgUrl,
            aspect,
            width,
            height: width
        }, id)
    }

    image.src = fileReaderResult;
    console.log(image)
}


    render() {
        const{ imgUrl, fileReaderResult } = this.state;
        return (
            <ImgThumbnail imgUrl={imgUrl}>
                <ImgInput   
                    type='file'
                    onChange={this.handleFileUpload}
                />
                <PhotoCropModal 
                    cropImage={this.cropImage} 
                    currentImage={fileReaderResult}  
                    modalIsOpen={this.state.modalIsOpen}
                />
            </ImgThumbnail>
        );
    }
};

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