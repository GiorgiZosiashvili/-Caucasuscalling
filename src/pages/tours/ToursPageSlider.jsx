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
const ToursPageSlider = ({ data }) => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledSlider {...settings}>
      {data?.map((image, index) => (
        <Slide key={index}>
          <Image src={image} />
        </Slide>
      ))}
    </StyledSlider>
  );
};
const StyledSlider = styled(Slider)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1128px;

  .slick-slide {
    padding: 50px 15px;
    transition: all 1s;
  }
  .slick-current {
    transform: scale(1.15);
  }
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
  top: 250px;
  transform: translateY(-50%);
  &:hover {
    background-color: #fa8b02;
  }
  z-index: 10;
  cursor: pointer;
  left: 5px;
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
  top: 250px;
  z-index: 10;
  cursor: pointer;
  right: 5px;
  transform: rotate(180deg) translateY(50%);
`;
const StyledArrow = styled(Arrow)`
  stroke: ${(props) => props.stroke};
  transition: stroke 0.3s; /* Smooth transition for color change */
`;
const Slide = styled.div`
  display: flex;
`;
const Image = styled.img`
  object-fit: cover;
  min-width: 100%;
  height: 350px;
  object-fit: cover;
`;
export default ToursPageSlider;
