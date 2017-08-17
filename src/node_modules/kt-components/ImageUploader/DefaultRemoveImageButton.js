import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg'

import minus from './../../../assets/minus.svg'

export default ({onClick}) => (
  <DefaultRemoveImageButton
    path={minus}
    callback={ svg => svg.addEventListener("click", onClick) }
  />
)

const DefaultRemoveImageButton = styled(ReactSVG)`
  background-color: ${props => props.theme.main};
  position: absolute;
  right: 0px;
  top: 0px;
  padding: 3px;
  width: 15px;
  height: 15px;
  stroke-width: 4px;
  border-radius: 20px;
  stroke: white;
`
