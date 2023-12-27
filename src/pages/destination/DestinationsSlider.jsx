/* eslint-disable react/prop-types */
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';

import { Arrow } from '../../components/SVG/Svgs';

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  const [hover, setHover] = useState(false);

  return (
    <ArrowLeft
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}>
      <StyledArrow stroke={hover ? '#fff' : '#333333'} />
    </ArrowLeft>
  );
};
const SampleNextArrow = (props) => {
  const { onClick } = props;
  const [hover, setHover] = useState(false);

  return (
    <ArrowRight
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}>
      <StyledArrow stroke={hover ? '#fff' : '#333333'} />
    </ArrowRight>
  );
};

const DestinationSlider = ({ images }) => {
  const settings = {
    customPaging: function (i) {
      return (
        <Body>
          <LittleImage src={images[i]} alt={`Slide ${i + 1}`} />
        </Body>
      );
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots slick-thumb',
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        {images?.map((image, index) => (
          <ActiveImage key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </StyledSlider>
    </Container>
  );
};

const StyledSlider = styled(Slider)`
  display: flex;
  flex-direction: column;
  max-width: 684px !important;
  margin-bottom: 30px;
  .slick-list {
    max-width: 684px;
    border-radius: 12px;
    overflow: hidden;
    width: 100% !important;
    max-height: 435px !important;
    margin-bottom: 15px;
    height: 100%;
  }
  .slick-dots {
    display: flex !important;
    position: static;
    justify-content: space-between;
    gap: 20px;
    li {
      width: 100%;
      height: 100px;
      border-radius: 12px;
      margin: 0px;
      overflow: hidden;
      transition: all 0.3s !important;
    }
    li.slick-active {
      border: solid 2.5px #fa8b02;
      transition: all 0.3s !important;
    }
  }
`;
const Container = styled.div`
  max-height: 596px !important;
  width: 100%;
  max-width: 684px;
`;
const ActiveImage = styled.img`
  display: flex !important ;
  width: 684px;
  height: 435px;
  object-fit: cover;
  margin-bottom: 10px;
  min-height: 435px !important ;
  @media screen and (max-width: 1000px) {
    align-items: start;
  }
`;

const Body = styled.a``;
const LittleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ArrowLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #efefef;
  top: 210px;
  transform: translateY(-50%);
  &:hover {
    background-color: #fa8b02;
  }
  z-index: 10;
  cursor: pointer;
  left: 10px;
`;
const ArrowRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #efefef;
  &:hover {
    background-color: #fa8b02;
  }
  top: 210px;

  z-index: 10;
  cursor: pointer;
  right: 10px;
  transform: rotate(180deg) translateY(50%);
`;
const StyledArrow = styled(Arrow)`
  stroke: ${(props) => props.stroke};
  transition: stroke 0.3s; /* Smooth transition for color change */
`;
export default DestinationSlider;
