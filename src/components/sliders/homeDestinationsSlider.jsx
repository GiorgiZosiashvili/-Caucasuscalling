/* eslint-disable react/prop-types */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

import CustomText from '../reusable/Text';
import { Arrow, Location } from '../SVG/Svgs';
import './Carousel.css';

const responsive = {
  desktop: {
    breakpoint: { max: 2500, min: 1530 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  mini_desktop: {
    breakpoint: { max: 1530, min: 1280 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1280, min: 800 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mini_tablet: {
    breakpoint: { max: 800, min: 600 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ButtonGroup = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;

  return (
    <CarouselButtonContainer className="carousel-button-group">
      <Button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()}>
        <StyledArrow stroke={'#333'} />
      </Button>
      <Button style={{ transform: 'rotate(180deg)' }} onClick={() => next()}>
        <StyledArrow stroke={'#333'} />
      </Button>
    </CarouselButtonContainer>
  );
};

const DestinationSlider = ({ data, title, description }) => {
  return (
    <SliderContainer>
      <CustomText
        textAlign="left"
        fontSize="24px"
        fontWeight="800"
        lineHeight="30px"
        margin="0px 10px 16px"
        color="#172432">
        {title}
      </CustomText>
      <CustomText
        textAlign="left"
        fontSize="24px"
        fontWeight="400"
        lineHeight="29px"
        color="#767E86"
        margin="0px 10px 55px">
        {description}
      </CustomText>
      <Carousel
        draggable={false}
        containerClass="carousel-container"
        itemClass="item-class"
        responsive={responsive}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        arrows={false}
        renderButtonGroupOutside={false}
        customButtonGroup={<ButtonGroup />}>
        {data
          ?.filter((item) => item.popular) // Filter the data based on the "popular" property
          .map((item, index) => (
            <SlideContent key={index}>
              <CustomText
                margin="0px 0px 0px 15px"
                textAlign="left"
                fontSize="20px"
                fontWeight="500"
                lineHeight="20px"
                color="white">
                {item?.title}
              </CustomText>
              <LocationContainer>
                <Location />
                <CustomText
                  style={{ marginLeft: 5 }}
                  textAlign="left"
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="16px"
                  color="#fff">
                  {item.title}, Georgia
                </CustomText>
              </LocationContainer>
              <Image src={item?.image} alt={item?.title} />
            </SlideContent>
          ))}
      </Carousel>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  width: 100%;
  margin: 0px auto 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 0px 20px;
`;

const CarouselButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
`;
const StyledArrow = styled(Arrow)`
  &:hover {
    stroke: #fff;
  }
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50px;
  background-color: #efefef;
  cursor: pointer;
  transition: all 0.3s;
  svg path {
    transition: all 0.3s;
  }
  &:hover {
    background-color: #ff6b35;
  }
  &:hover svg path {
    stroke: #fff;
  }
`;

const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  width: 100%;
  max-width: 380px;
  height: 400px;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
  margin: 0px 10px;
`;
const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 17px 0px 40px 0px;
  padding: 0px 15px;
`;
const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  position: absolute;
  z-index: -1;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
`;

export default DestinationSlider;
