import React, { Component } from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import onClickOutside from 'react-onclickoutside';

import exit from './../../../../assets/exit.svg';

class ModalContainer extends Component {

  componentWillMount() {
    document.body.classList.add('ReactModal__Body--open');
  }
  componentWillUnmount() {
    document.body.classList.remove('ReactModal__Body--open');
  }

  render() {
    const{ close, children } = this.props
    return (
      <Overlay>
        <Exit callback={ svg => svg.addEventListener("click", close) } path={exit} />
        <ModalContent close={close}>
          { children }
        </ModalContent>
      </Overlay>
    )
  }
}

export default ModalContainer;

const Overlay = styled.div`
  position: fixed;
  top: 0; bottom: 0; left: 0; right: 0;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  padding: 10px;
`
const Exit = styled(ReactSVG)`
  position: fixed;
  right: 5px; top: 5px;
  stroke: white;
  width: 28px;
  height: 28px;
  cursor: pointer;
`


class _OnClickOutsideContainer extends Component {

  handleClickOutside() {
    this.props.close()
  }
  render() {

    const Container = styled.div`
      margin: 5% auto auto auto;
      display: flex;
      flex-direction: column;
      ${props => props.theme.media.desktop} {
        flex-direction: row;
        margin: 10% auto auto auto;
      }
    `
    return (
      <Container>
        { this.props.children }
      </Container>
    )
  }
}

const ModalContent = onClickOutside(_OnClickOutsideContainer)
