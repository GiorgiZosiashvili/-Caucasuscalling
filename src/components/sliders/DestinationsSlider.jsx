/* eslint-disable react/prop-types */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

import CustomText from '../reusable/Text';
import { Arrow, Location } from '../SVG/Svgs';

const responsive = {
  desktop: {
    breakpoint: { max: 2500, min: 1400 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1400, min: 700 },
    items: 4,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
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
        margin="0px 0px 16px"
        color="#172432">
        {title}
      </CustomText>
      <CustomText
        textAlign="left"
        fontSize="24px"
        fontWeight="400"
        lineHeight="29px"
        color="#767E86"
        margin="0px 0px 55px">
        {description}
      </CustomText>
      <Carousel
        draggable={false}
        responsive={responsive}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        itemClass="carousel-item-padding-top-200-px">
        {data.map((item, index) => (
          <SlideContent key={index}>
            <CustomText
              style={{ marginLeft: 24 }}
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
                style={{ marginLeft: 10 }}
                textAlign="left"
                fontSize="16px"
                fontWeight="400"
                lineHeight="16px"
                color="#fff">
                {item.location}
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
  width: 99.9%;
  margin: 0px auto 150px;
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
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

const CarouselButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  top: 35px;
  right: 40px;
  width: 105px;
  position: absolute;
`;
const StyledArrow = styled(Arrow)`
  &:hover {
    stroke: #fff;
  }
`;

const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  width: 298px;
  height: 400px;
  justify-content: flex-end;
  position: relative;
  border-radius: 30px;
  overflow: hidden;
`;
const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 17px 0px 40px 24px;
`;
const Image = styled.img`
  width: 298px;
  height: 400px;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`;

export default DestinationSlider;
