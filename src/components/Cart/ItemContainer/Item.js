import React from 'react';
import styled from 'styled-components';

const Item = () => {
    return (
        <Container>
            <Image />
            <DetailContainer>
                <Name>6" Folding Bushcraft</Name>
            </DetailContainer>
            
        </Container>
    );
};

export default Item;

const Container = styled.div`
    width: 100%;
    border-top: 1px solid ${props => props.theme.secondary};
    padding: 40px 0;
    display: flex;
`
const Image = styled.div`
    background: url('http://via.placeholder.com/175x175') center;
    width: 175px;
    height: 175px;
`
const Name = styled.h4`
    ${props => props.theme.mainFont({})};
    font-weight: 800;
    text-transform: uppercase;
`

const DetailContainer = styled.div`
    display: flex;
    padding: 30px 25px;
`