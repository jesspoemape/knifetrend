import React from 'react';
import styled from 'styled-components';

import Divider from 'kt-components/Divider';

const About = () => {
  return (
    <Container>
      <Header>
        Take a look into my shop
      </Header>
      <GrayDivider/>
      <Paragraph>
        Vestibulum ante massa, accumsan at efficitur vitae, viverra id dui. Etiam vitae ligula leo. Fusce ut mauris sed dui efficitur convallis. Cras eget eros id libero rhoncus fringilla non nec elit. Maecenas congue tellus sed nisl posuere, sed elementum ex elementum. In posuere tempus blandit. Quisque volutpat purus ut pretium ultricies. Phasellus congue luctus mauris sit amet volutpat. Mauris tincidunt malesuada metus, eu rutrum neque tincidunt vitae. Etiam vitae turpis vitae felis viverra feugiat. Nulla facilisi. Integer imperdiet euismod diam, ut aliquam felis venenatis sed. In sagittis elit at metus suscipit, sit amet pharetra nisi lobortis. Nullam maximus, nisl eu scelerisque condimentum, tellus odio tempus nibh, id ultricies neque mi sit amet odio. Curabitur iaculis dignissim neque vitae porttitor.
      </Paragraph>
      <MainImg/>
      <Paragraph>
        Vestibulum ante massa, accumsan at efficitur vitae, viverra id dui. Etiam vitae ligula leo. Fusce ut mauris sed dui efficitur convallis. Cras eget eros id libero rhoncus fringilla non nec elit. Maecenas congue tellus sed nisl posuere, sed elementum ex elementum. In posuere tempus blandit. Quisque volutpat purus ut pretium ultricies. Phasellus congue luctus mauris sit amet volutpat. Mauris tincidunt malesuada metus, eu rutrum neque tincidunt vitae. Etiam vitae turpis vitae felis viverra feugiat. Nulla facilisi. Integer imperdiet euismod diam, ut aliquam felis venenatis sed.
      </Paragraph>
      <ImageContainer>
        <SecondaryImg />
        <SecondaryImg />
      </ImageContainer>
    </Container>
  )
}

export default About;

const Container = styled.section`
    max-width: 1000px;
    margin: 15px;
`

const Header = styled.h1`
    ${props => props.theme.secondaryFont({})};
    color: ${props => props.theme.main};
    font-size: 60px;
    text-transform: uppercase;
`
const GrayDivider = styled(Divider)`
    width: 120px;
    height: 2px;
    color: #404040;
    margin-top: 30px;
`
const Paragraph = styled.p`
    ${props => props.theme.mainFont({})};
    font-size: 26px;
    margin: 30px 0;
`
const MainImg = styled.div`
    background: url('https://i.ytimg.com/vi/Xuqbgc1AjDQ/maxresdefault.jpg') center;
    background-size: auto;
    width: 100%;
    height: 400px;
    ${props => props.theme.media.tablet} {
        background-size: cover;
    }
`
const ImageContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`
const SecondaryImg = styled.div`
    width: 100%;
    height: 400px;
    background: url('https://vignette3.wikia.nocookie.net/lego/images/a/aa/Naaaaaw.png/revision/latest?cb=20140817201354') center;
    background-size: cover;
    margin-top: 20px;
    ${props => props.theme.media.tablet} {
        width: 49%;
    }
`
