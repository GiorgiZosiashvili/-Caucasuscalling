/* eslint-disable react/prop-types */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import CustomText from '../reusable/Text';
import { Arrow, Location, NavArrow } from '../SVG/Svgs';
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

const ToursSlider = ({ data, title, description }) => {
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
        infinite={true}
        responsive={responsive}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        arrows={false}
        itemClass="item-class"
        renderButtonGroupOutside={false}
        customButtonGroup={<ButtonGroup />}>
        {data
          ?.filter((item) => item.popular)
          .map((item, index) => (
            <SlideContent to={`/Tours/${item.title}`} key={index}>
              <LocationContainer>
                <Location />
                <TruncatedText
                  textAlign="left"
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="16px"
                  color="#fff">
                  {item.location}
                </TruncatedText>
              </LocationContainer>
              <Image src={item?.image} alt={item?.title} />
              <TextContainer>
                <CustomText
                  textAlign="left"
                  fontSize="20px"
                  fontWeight="500"
                  lineHeight="25px"
                  color="#222">
                  {item?.title}
                </CustomText>
                <CustomText
                  textAlign="left"
                  fontSize="14px"
                  fontWeight="400"
                  lineHeight="14px"
                  color="#999">
                  {item?.length}
                </CustomText>
                <CustomText
                  textAlign="left"
                  fontSize="24px"
                  fontWeight="500"
                  lineHeight="24px"
                  color="#FA7436">
                  {item?.price}
                </CustomText>
                <Div>
                  <CustomText
                    textAlign="left"
                    fontSize="14px"
                    fontWeight="500"
                    lineHeight="14px"
                    color="#007A33">
                    View
                    <br /> More
                  </CustomText>
                  <NavArrow />
                </Div>
              </TextContainer>
            </SlideContent>
          ))}
      </Carousel>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  width: 100%;
  margin: 91px auto 125px;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const CarouselButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: 0px;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
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

const StyledArrow = styled(Arrow)`
  &:hover {
    stroke: #fff;
  }
`;
const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  position: absolute;
  bottom: 159.5px;
  width: 100%;
  height: 56px;
  padding-left: 16px;
  background-color: #00000045;
`;
const TruncatedText = styled(CustomText)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  max-width: 210px;
`;
const SlideContent = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 0.5px solid #e8e8e8;
  width: 100%;
  max-width: 440px;
  height: 400px;
  position: relative;
  border-radius: 12px;
  margin: 0px 10px;
`;

const Image = styled.img`
  width: 100%;
  min-height: 240px;
  object-fit: fill;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 248px;
  height: 100%;
  margin-left: 15px;
  justify-content: space-evenly;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 24px;
  right: 20px;
  height: 26px;
`;

export default ToursSlider;
