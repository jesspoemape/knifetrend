import React, { Component } from 'react';
import styled from 'styled-components';


class PhotoUploadContainer extends Component{
    getPhotoData({imgUrl, cropInfo}, key) {
        this.setState()
    }
    render() {
        return (
            <div>
                <ImgContainer>
                    <PhotoUpload 
                        key={1} 
                        onUploadComplete={this.getPhotoData} 
                    />
                    <PhotoUpload />
                    <PhotoUpload />
                    <PhotoUpload />
                    <PhotoUpload />
                </ImgContainer>
                <ImgDescription>(cover photo)</ImgDescription>
            </div>
        );
    }
};

export default PhotoUploadContainer;

const ImgContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px 20px 0px 20px;
`

const ImgDescription = styled.p`
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 10px;
    color: #bfbfbf;
    padding: 5px 40px;
`