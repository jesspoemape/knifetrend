import React from 'react';
import styled from 'styled-components';

import ItemThumbnails from './ItemThumbnails'

const Knives = () => {
    return (
        <Container>
          <ItemThumbnails/>
          <ItemThumbnails/>
          <ItemThumbnails/>
          <ItemThumbnails/>
          <ItemThumbnails/>
          <ItemThumbnails/>
        </Container>
    );
};

export default Knives;

const Container = styled.div`
    background: lightgray;
    width: 70vw;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    ${props => props.theme.media.tablet} {
      margin-left: 0px;
      width: 80vw;
     }
     ${props => props.theme.media.desktop} {
      margin-left: 75px;
      width: 60vw;
     }
`
