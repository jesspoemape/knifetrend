import React, {Component} from 'react';
import styled from 'styled-components';

import PhotoUpload from './PhotoUpload'
import MinimalButton from 'kt-components/MinimalButton';

class EntryInfo extends Component {
    // photo object {url, x, y, height, width, aspect}
    // secondary photos {url, x, y, height, width, aspect, key}
    constructor() {
        super();
        this.state={
            primaryPhoto: ' ',
            secondaryPhotos: [],
            name: ' ',
            description: ' '
        }

        this.handleChange = this.handleChange.bind(this);
        this.onFinishUpload = this.onFinishUpload.bind(this);

    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onFinishUpload(photoObj, id) {
        if (id === 1) {
            this.setState({
                primaryPhoto: photoObj
            })
        }
        else {
            let secondaryArr = [...this.state.secondaryPhotos].filter(item => {
                return item.id !== id
            });
            photoObj.id = id;
            secondaryArr.push(photoObj);
            this.setState({
                secondaryPhotos: secondaryArr
            })
        } 
        console.log(this.state)
    }

    render() {
    return (
        <div>
            <ImgContainer>
                <PhotoUpload id={1} onFinishUpload={this.onFinishUpload}/>
                <PhotoUpload id={2} onFinishUpload={this.onFinishUpload}/>
                <PhotoUpload id={3} onFinishUpload={this.onFinishUpload}/>
                <PhotoUpload id={4} onFinishUpload={this.onFinishUpload}/>
                <PhotoUpload id={5} onFinishUpload={this.onFinishUpload}/>
            </ImgContainer>           
            <ImgDescription>(cover photo)</ImgDescription>

            <Container>
                <NameInput 
                    name="name"
                    onChange={this.handleChange}
                    placeholder='Knife Name' 
                />
                <DescriptionInput 
                    name="description"
                    placeholder='Write Description' 
                    onChange={this.handleChange}
                />
            </Container>
            <SubmitButton> Submit Entry </SubmitButton>
        </div>
    );
};
}

export default EntryInfo;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const NameInput = styled.input`
    width: 300px;
    border: 0.5px solid #bfbfbf;
    padding: 10px;
    font-size: 8px;
    &::placeholder {
        color: #bfbfbf;
    }
`
const DescriptionInput = styled.textarea`
    margin-top: 10px;
    width: 280px;
    border: 0.5px solid #bfbfbf;
    padding: 10px;
    font-size: 8px;
    height: 80px;
    vertical-align: top;
    resize: none;
    &::placeholder {
        color: #bfbfbf;
    }
`
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
const SubmitButton = styled(MinimalButton)`
    background: ${props => props.theme.main};
    font: ${props => props.theme.mainFont({})};
    margin: 30px auto;
    color: white;
    font-size: 16pt;
    padding: 10px 60px;
    border-radius: 30px;
    border-style: none;
`