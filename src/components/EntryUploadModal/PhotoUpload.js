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
        }

        this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    handleFileUpload(event, index) {
        let file = event.target.files[0]
        let reader = new FileReader()
        reader.onloadend = () => {
          const imageSources = this.state.imageSources.slice(0)
          imageSources[index] = {originalImageSource: reader.result}
          console.log('state:', imageSources)
          this.setState({
            imageSources
          })
        }
        reader.readAsDataURL(file)

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
                            <PhotoCropModal index={i} cropImage={this.cropImage} currentImage={this.state.imageSources[i]} crop={this.state.crop}/>
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