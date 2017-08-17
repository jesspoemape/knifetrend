import React, { Component } from 'react';
import { gql } from 'react-apollo';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

import graphqlWithLoading from 'kt-hocs/graphqlWithLoading';

import Exit from './../../../assets/exit.svg';

const Quantity = ({quantity}) => {
        return (
            <Container>
                <QuantityInput value={quantity} />
                <ExitButton path={Exit}/>
            </Container>
        );
    }


export default Quantity;

const Container = styled.section`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const QuantityInput = styled.input`
    ${props => props.theme.mainFont({})};
    height: 40px;
    width: 60px;
    border: 1px solid #95989A;
    border-radius: 10px;
    margin-right: 15px;
    text-align: center;
    font-size: 24px;
    font-weight: 400;
`
const ExitButton = styled(ReactSVG)`
    stroke: ${props => props.theme.main};
    height: 50px;
    width: 50px;
    stroke-linecap: square; 
`