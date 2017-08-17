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
    margin-top: 30px;
    min-height: 200px;
    ${props => props.theme.media.phone}{
        margin-top: 60px;
    }
    ${props => props.theme.media.tablet}{
        // margin-top: 100px;
    }
`
const SearchAndFilter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${props => props.theme.media.phone}{

    }
    ${props => props.theme.media.tablet}{
        flex-direction: row;
    }
    ${props => props.theme.media.desktop}{
        margin-left: 30px;
    }
`

