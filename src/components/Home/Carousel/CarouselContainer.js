import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import ReactSVG from 'react-svg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import sliderSVG from './../../../assets/custom-slider-paging.svg';

const CarouselContainer = ({ children }) => {
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    draggable: false,
    customPaging: () => (<a><ReactSVG path={ sliderSVG } /></a>)
  }
  return (
    <TestimonialSlider {...settings}>
        { children }
    </TestimonialSlider>
  )
}

const TestimonialSlider = styled(Slider)`
  height: 100%;
  & .slick-active circle {
    fill: white;
  }
  & .slick-dots {
    bottom: 0px;
  }
  & .slick-dots li {
    width: 5px;
  }
`
export default CarouselContainer;
