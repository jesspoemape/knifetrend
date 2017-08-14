import React, { Component } from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import ReactCrop from 'react-image-crop';

import 'react-image-crop/dist/ReactCrop.css'
import PhotoCropModal from './PhotoCropModal'

class PhotoUpload extends Component{
    constructor (props) {
        super(props)

        this.state = {
            imageSources: ['1', '2', '3', '4', '5',],
            crop: {
                width: 40,
                aspect: 1/1,
                x: 0,
                y: 0,
            },
            modalIsOpen: false
        }

        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.cropImage = this.cropImage.bind(this);
    }

    handleFileUpload(event, index) {
        let file = event.target.files[0] 
        let reader = new FileReader() 
        reader.onloadend = () => {
          const imageSources = this.state.imageSources.slice(0)
          imageSources[index] = {originalImageSource: reader.result}
          console.log('STATE',this.state)
          this.setState({
            imageSources,
            modalIsOpen: true
          })
        }
        reader.readAsDataURL(file)

      }

cropImage(crop, index) {
    console.log('CROP', crop)
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

        let imageSources = this.state.imageSources.splice(0)
        let imageSrc = canvas.toDataURL('image/jpeg')
        console.log('State', this.state)
        imageSources[index] = Object.assign(this.state.imageSources[index], {originalImageSource: imageSrc}) // state is being erased here????
        // console.log('IMAGE SOURCES',imageSources)

        this.setState({
        imageSources,
        modalIsOpen: false
        })
    }
    image.src = this.state.imageSources[index].originalImageSource;
}


    render() {
        return (
            <div>
                <ImgContainer>
                    {this.state.imageSources.map((img, i) => {
                        return (
                            <ImgUpload key={i}>
                                <ImgInput   type='file'
                                            onChange={(event) => this.handleFileUpload(event, i)}/>
                            <PhotoCropModal index={i} cropImage={this.cropImage} currentImage={this.state.imageSources[i]} crop={this.state.crop} modalIsOpen={this.state.modalIsOpen}/>
                            </ImgUpload>
                            
                        )
                    })}
                </ImgContainer>
                <ImgDescription>(cover photo)</ImgDescription>
            </div>
        );
    }
};

export default PhotoUpload;

const ImgContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px 20px 0px 20px;
`
const ImgUpload = styled.div`
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

const ImgDescription = styled.p`
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 10px;
    color: #bfbfbf;
    padding: 5px 40px;
`