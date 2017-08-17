import React from 'react';
import styled from 'styled-components';

import Quantity from './Quantity';

const Item = () => {
    return (
        <MainContainer>
            <LeftContainer>
                <Image />
                <DetailContainer>
                    <Name>6" Folding Bushcraft</Name>
                    <Totals>$299.00</Totals>
                    <MinimalText>+ $12.87 Shipping</MinimalText>
                    <Divider />
                    <MinimalText>Total</MinimalText>
                    <Totals>$311.87</Totals>
                </DetailContainer>
            </LeftContainer>
            <RightContainer>
                <Quantity/>
            </RightContainer>
        </MainContainer>
    );
};

export default Item;

const MainContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${props => props.theme.secondary};
`
const LeftContainer = styled.div`
    width: 50%;
    padding: 40px 0;
    display: flex;
`
const Image = styled.div`
    background: url('http://via.placeholder.com/175x175') center;
    width: 175px;
    height: 175px;
`
const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 25px;
    ${props => props.theme.mainFont({})};
`
const Name = styled.h4`
    font-weight: 800;
    text-transform: uppercase;
`
const Totals = styled.h3`
    color: ${props => props.theme.main};
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 4px;
`
const MinimalText = styled.h6`
    font-size: 14px;
`
const Divider = styled.div`
    width: 100px;
    margin: 8px 0;
    border-bottom: 1px solid ${props => props.theme.secondary};
`
const RightContainer = styled.section`
    width: 50%;
    display: flex;
    justify-content: flex-end;
`
