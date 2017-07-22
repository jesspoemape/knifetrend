import styled from 'styled-components';

const ImageBanner = styled.section`
  background: url('${props => props.url}') no-repeat center ${props => props.y || -50}px ;
  background-size: cover;
  height: ${props => props.minHeight || 300}px;
`
export default ImageBanner
