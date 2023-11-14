/* eslint-disable react/prop-types */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

import CustomText from '../reusable/Text';
import { Arrow, Location, NavArrow } from '../SVG/Svgs';

const responsive = {
  desktop: {
    breakpoint: { max: 2500, min: 1366 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1366, min: 700 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
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

const ItemsSlider = ({ data, title, description }) => {
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
            <TextContainer>
              <CustomText
                textAlign="left"
                fontSize="20px"
                fontWeight="500"
                lineHeight="20px"
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
  width: 99.9%;
  margin: 91px auto 150px;
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
const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  position: absolute;
  bottom: 157.5px;
  width: 100%;
  height: 56px;
  padding-left: 16px;
  background-color: #00000045;
`;

const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.5px solid #e8e8e8;
  border-radius: 12px;
  width: 290px;
  height: 400px;
  position: relative;
`;

const Image = styled.img`
  width: 298px;
  height: 242px;
  object-fit: cover;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 248px;
  height: 100px;
  margin-left: 15px;
  margin-top: 24px;
  justify-content: space-between;
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

export default ItemsSlider;
