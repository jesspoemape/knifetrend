import React from 'react';
import styled from 'styled-components';


const EntryInfo = () => {
    return (
        <Container>
            <NameInput placeholder='Knife Name' />
            <DescriptionInput placeholder='Write Description' />
        </Container>
    );
};

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
const DescriptionInput = styled.input`
    margin-top: 10px;
    width: 300px;
    border: 0.5px solid #bfbfbf;
    padding: 10px;
    font-size: 8px;
    height: 80px;
    text-align: top;
    &::placeholder {
        color: #bfbfbf;

    }
`