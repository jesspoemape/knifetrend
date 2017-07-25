import styled from 'styled-components';

const ImageBanner = styled.section`
  background: url('${props => props.url}') no-repeat center center ;
  background-size: auto;
  height: ${props => props.height || 300}px;
  ${props => props.theme.media.xl} {
    background-size: cover;
  }
`
export default ImageBanner
