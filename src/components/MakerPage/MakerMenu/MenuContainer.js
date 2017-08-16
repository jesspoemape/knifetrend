import React, { Component } from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import Media from 'react-media';


import chevronDown from '../../../assets/chevron-down.svg';

import MakerNavbar from './MakerNavbar';
import MakerDetails from './MakerDetails';
import MobileMenu from './MobileMenu';

class MenuContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayMenu: false
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }

    toggleDisplay() {
        this.setState({
            displayMenu: !this.state.displayMenu
          })
    }
    render(){
        return (
            <Container>
                <MakerNavbar/>
                <MobileMenuButton path={chevronDown}
                callback={ (svg) => svg.addEventListener("click", this.toggleDisplay) }
                />
                { this.state.displayMenu ? <MobileMenu toggleDisplay={ this.toggleDisplay } /> : null }
                <Media query="(min-width: 950px)" render={()=>(
                    <MakerDetails/>
                )}/>
            </Container>
        );
    }
};

export default MenuContainer;

const Container = styled.aside`
    width: 100%;
    height: 100%;
    ${props => props.theme.media.tablet} {
        margin-top: 0;
    }
    ${props => props.theme.media.xl} {
        width: 300px;
    }
`
const MobileMenuButton = styled(ReactSVG)`
    stroke: #606060;
    margin: 10px;
    ${props => props.theme.media.desktop}{
        display: none;
    }
`
