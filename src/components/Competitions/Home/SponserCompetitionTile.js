import React from 'react';
import styled from 'styled-components';

import { MinimalButton } from 'shared-components';
import CompetitionTile from './CompetitionTile';

export default props => (
  <CompetitionTile
      imgUrl="https://s3-us-west-2.amazonaws.com/knifetrend-assets/competitions/kt-competition-sponser.png"
      name="Sponsor Your Own Competition!"
      shortDesc="Want to host your own competition? You can start now!"
      to="/"
  >
    <Button> Learn More </Button>
  </CompetitionTile>
)

const Button = styled(MinimalButton)`
  color: white;
  border-color: white;
  border-radius: 50px;
  font-weight: 400;
  font-size: 12pt;
  font-spacing: 1.5pt;
  padding: 15px 30px;
  margin-top: 20px;
  & :hover {
    color: ${props => props.theme.main}
    background-color: white;
  }
`
