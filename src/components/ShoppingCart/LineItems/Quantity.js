import React, { Component }  from 'react';
import styled from 'styled-components';
import SVG from 'kt-components/SVG';
import {gql, graphql, compose} from 'react-apollo';

import Exit from './../../../assets/exit.svg';


class Quantity extends Component {
  constructor(props) {
    super(props);
    this.state={
      quantity: this.props.quantity
    }

   this.handleUpdate = this.handleUpdate.bind(this);
   this.handleChange = this.handleChange.bind(this);
   this.handleRemove = this.handleRemove.bind(this);
  }

 handleUpdate() {
   const {itemId, updateQuantity} = this.props;
    updateQuantity({
      variables: {
        itemId,
        newQuantity: this.state.quantity
      }
    })}

  handleChange(e) {
    this.setState({
      quantity: e.target.value
    })
    }

  handleRemove() {
   const {itemId, removeFromCart} = this.props;
      removeFromCart({
        variables: {
          itemId 
        }
      })
    }

  render() {
    const {quantity} = this.state;
    return (
    <Container>
      <QuantityInput onChange={this.handleChange} onBlur={this.handleUpdate} value={quantity}/>
      <RemoveButton 
        path={Exit}
        onClick={this.handleRemove}
        />
    </Container>
    );
  }
}

const updateQuantity = gql`
  mutation ($itemId: Int!, $newQuantity:Int!) {
  updateCartQuantity(ItemId: $itemId, newQuantity: $newQuantity) {
    id
    quantity
  }
}
`
const removeFromCart = gql`
  mutation ($itemId: Int!) {
  removeFromCart(ItemId: $itemId) {
    id
    totalItemQuantity
    shoppingCart {
      id
      lineItems {
        id
      }
    }
  }
}
`

export default compose(
  graphql(updateQuantity, {
    name: 'updateQuantity'
  }),
  graphql(removeFromCart, {
    name: 'removeFromCart'
  })
)(Quantity);


const Container = styled.section `
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const QuantityInput = styled.input `
  ${props => props.theme.mainFont({})};
  height: 30px;
  width: 40px;
  border: 1px solid #95989A;
  border-radius: 10px;
  margin-right: 15px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  ${props => props.theme.media.tablet} {
      height: 35px;
      width: 50px;
      font-size: 24px;
    }
  ${props => props.theme.media.desktop} {
      height: 40px;
      width: 60px;
      font-size: 24px;
    }
`
const RemoveButton = styled(SVG)`
  stroke: ${props => props.theme.main};
  height: 30px;
  width: 30px;
  stroke-linecap: square;
   ${props => props.theme.media.tablet} {
      height: 40px;
      width: 40px;
    }
  ${props => props.theme.media.desktop} {
      height: 50px;
      width: 50px;
    }
`
