import React, { Component } from 'react';
import styled from 'styled-components';
import { gql } from 'react-apollo';
import ReactSVG from 'react-svg';

import plus from './../../../../assets/plus.svg'

class ItemTile extends Component { 
  constructor(props){
    super(props);
    this.state = {
      showAddToCart: false
    }
    this.toggleAddToCart = this.toggleAddToCart.bind(this);
  }

  toggleAddToCart(){
    console.log('got here')
    this.setState({
      showAddToCart: !this.state.showAddToCart
    })
  }
  render() {
    const {primaryPhoto, name, price} = this.props;
    const {showAddToCart} = this.state;
    return (
      <Tile>
        <KnifeImage url={primaryPhoto}/>

        { !showAddToCart ? <Footer>
          <Details>
            <Name>{ name }</Name>
            <Price>${ price }</Price>
          </Details>
          <ShowAddToCart  path={plus}
                          callback={ (svg)=> svg.addEventListener("click", this.toggleAddToCart)}
          />
        </Footer> 
        :
        <AddToCart>Add to Cart</AddToCart>
        }

      </Tile>
    )
  }
}

ItemTile.fragment = gql`
  fragment ItemTile on Item {
    id
    primaryPhoto
    name
    price
  }
`

export default ItemTile;

const Tile = styled.div`
    margin: 20px;
    background: white;
    box-shadow: ${props => props.theme.shadow}
`
const KnifeImage = styled.div`
    background: url(${props => props.url});
    background-size: cover;
    background-position: center;
    height: 250px;
    width: 250px;
`
const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 54px;
`
const Details = styled.div`

`
const Name = styled.p`
padding: 14px 10px 0px 10px;
${props => props.theme.mainFont({})};
font-weight: 700;
text-transform: uppercase;
font-size: 12pt;
`
const Price = styled.p`
${props => props.theme.mainFont({})};
font-weight: 700;
font-size: 16pt;
color: ${props => props.theme.main};
padding: 3px 0 0 10px;
`
const ShowAddToCart = styled(ReactSVG)`
  background: ${props => props.theme.secondary};
  width: 54px;
  height: 54px;
  stroke: white;
`
const AddToCart = styled.div`
  height: 54px;
  background: ${props => props.theme.main};
  text-transform: uppercase;
  ${props => props.theme.secondaryFont({})};
  font-size: 18pt;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: .5pt;
`
