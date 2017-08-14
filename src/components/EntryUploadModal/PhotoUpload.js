import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

const PhotoUpload = () => {
    return (
        <div>
            <ImgContainer>
                <ImgUpload/>
                <ImgUpload/>
                <ImgUpload/>
                <ImgUpload/>
                <ImgUpload/>
            </ImgContainer>
            <ImgDescription>(cover photo)</ImgDescription>
        </div>
    );
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
const ImgDescription = styled.p`
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 10px;
    color: #bfbfbf;
    padding: 5px 40px;
`