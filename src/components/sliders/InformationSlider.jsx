/* eslint-disable react/prop-types */
import Carousel from 'react-multi-carousel';
import { styled } from 'styled-components';

import CustomText from '../reusable/Text';
import { Arrow } from '../SVG/Svgs';

const InformationSlider = ({ title, data, description }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 2500, min: 1530 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1530, min: 901 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 901, min: 0 },
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
        itemClass="item-class"
        responsive={responsive}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        arrows={false}
        renderButtonGroupOutside={false}
        customButtonGroup={<ButtonGroup />}>
        {data.map((item, index) => (
          <SlideContent key={index}>
            <Image src={item?.image} alt={item?.title} />
            <CustomText
              textAlign="left"
              fontSize="30px"
              fontWeight="600"
              lineHeight="36px"
              margin="100px 30px 10px"
              color="white">
              {item?.title}
            </CustomText>
            <CustomText
              textAlign="left"
              fontSize="14px"
              fontWeight="400"
              lineHeight="21px"
              margin="0px 30px"
              color="rgba(255, 255, 255, 0.9)">
              {item.info}
            </CustomText>
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

const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  min-height: 380px;
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`;

export default InformationSlider;
