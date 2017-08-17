import React from 'react';
import styled from 'styled-components';

import Search from './Search';
import Filter from './Filter';
import Knives from './Knives/Knives';

const Storefront = () => {
    return (
        <Container>
            <SearchAndFilter>
                <Search/>
                <Filter/>
            </SearchAndFilter>
            <Knives/>
        </Container>
    );
};

export default Storefront;

const Container = styled.section`
    margin-top: 60px;
    min-height: 200px;
    background: #f5f5f5;
    width: 100vw;
    ${props => props.theme.media.phone}{
        margin-top: 80px;
        margin-left: 60px;
    }
    ${props => props.theme.media.tablet}{
        margin-top: 100px;
    }
`
const SearchAndFilter = styled.div`
    display: flex;
    ${props => props.theme.media.phone}{
        margin-left: 15vw;
    }
    ${props => props.theme.media.desktop}{
        margin-left: 0;
    }
`

