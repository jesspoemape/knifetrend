import React, { Component }  from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import {gql, graphql} from 'react-apollo';

import Exit from './../../../assets/exit.svg';


class Quantity extends Component {
  constructor(props) {
    super(props);
    this.state={
      quantity: this.props.quantity
    }

   this.handleUpdate = this.handleUpdate.bind(this);
   this.handleChange = this.handleChange.bind(this);
  }

 handleUpdate() {
   const {itemId, mutate} = this.props;
    mutate({
      variables: {
        itemId: itemId,
        newQuantity: this.state.quantity
      }
    })}

    handleChange(e) {
      this.setState({
        quantity: e.target.value
      })
    }

  render() {
    const {quantity} = this.state;
    return (
    <Container>
      <QuantityInput onChange={this.handleChange} onBlur={this.handleUpdate} value={quantity}/>
      <RemoveButton path={Exit}/>
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

export default graphql(updateQuantity)(Quantity);

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
  ${props => props.theme.media.desktop} {
      height: 40px;
      width: 60px;
      font-size: 24px;
    }
    ${props => props.theme.media.tablet} {
      height: 35px;
      width: 50px;
      font-size: 24px;
    }
`
const RemoveButton = styled(ReactSVG)`
  stroke: ${props => props.theme.main};
  height: 30px;
  width: 30px;
  stroke-linecap: square;
  ${props => props.theme.media.desktop} {
      height: 50px;
      width: 50px;
    }
    ${props => props.theme.media.tablet} {
      height: 40px;
      width: 40px;
    }
`
