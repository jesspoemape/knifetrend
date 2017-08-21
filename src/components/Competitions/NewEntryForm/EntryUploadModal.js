import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import ReactSVG from 'react-svg';
import {Redirect} from 'react-router-dom';

import Divider from 'kt-components/Divider';
import withViewer from 'kt-hocs/withViewer';

import exit from './../../../assets/exit.svg';
import EntryInfo from './EntryInfo';

const imgURL = 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-talladega-nights-the-ballad-of-ricky-bobby-will-ferrell.jpg';
const authURL = `${process.env.REACT_APP_SERVER_URL}/auth`

const EntryUploadModal = ({ isOpen, onRequestClose, viewer }) => {
    if(!viewer) return <Redirect href={authURL}/>
  return (
    <ReactModal
        contentLabel='modal-label'
        isOpen={isOpen}
        onRequestClose={onRequestClose}
    >
      <Container>
        <Header>
          <ProfileImage src={viewer.avatar}/>
          <UserName>{viewer.name}</UserName>
          <Exit callback={ svg => svg.addEventListener("click", onRequestClose) } path={exit} />
        </Header>
        <Title>EDC folding</Title>
        <Description>Upload up to 5 photos for each entry. Be sure you take nice, well-lit photos of your knife so your design can shine!</Description>
        <GrayDivider/>
        <EntryInfo />
      </Container>
    </ReactModal>
  )
}

export default withViewer(EntryUploadModal);

const Container = styled.section`
    max-width: 600px;
    border-bottom: 6px solid ${props => props.theme.main};
    background: #f5f5f5;
`
const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.main};
    width: 100%;
    height: 50px;
`
const UserName = styled.p`
    text-transform: uppercase;
    font: ${props => props.theme.mainFont({})};
    color: white;
    font-size: 19px;
    font-weight: 400;
`
const ProfileImage = styled.img`
    border-radius: 50%;
    height: 33px;
    width: 33px;
    margin-right: 10px;
`
const Exit = styled(ReactSVG)`
    position: absolute;
    top: 15px;
    right: 15px;
    stroke: white;
    width: 28px;
    height: 28px;
    cursor: pointer;
`
const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    font: ${props => props.theme.secondaryFont({})};
    color: ${props => props.theme.main};
    font-size: 37px;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 15px;
`
const Description = styled.p`
    font: ${props => props.theme.mainFont({})};
    color: ${props => props.theme.secondary};
    font-size: 20px;
    text-align: center;
    margin: 0 auto 20px auto;
    width: 75%;
    line-height: 27px;
`
const GrayDivider = styled(Divider)`
    width: initial;
    margin: 0 20px;
    background: #d9d9d9;
`
