/* eslint-disable react/prop-types */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { styled } from 'styled-components';

import CustomText from '../../components/reusable/Text';
import { Arrow } from '../../components/SVG/Svgs';

const GallerySlider = ({ data }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
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
        margin="0px 0px 16px"
        color="#172432">
        Gallery
      </CustomText>
      <Carousel
        draggable={false}
        itemClass="item-class"
        responsive={responsive}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        arrows={false}
        renderButtonGroupOutside={false}
        customButtonGroup={<ButtonGroup />}>
        {data?.gallery.map((item, index) => {
          return (
            <SlideContent key={index}>
              <Image src={item?.imageUrl} />
            </SlideContent>
          );
        })}
      </Carousel>
    </SliderContainer>
  );
};
const SliderContainer = styled.div`
  width: 100%;
  max-width: 1156px;
  margin: 80px auto 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
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
  border-radius: 12px;
  width: 95%;
  height: 400px;
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  justify-content: space-between;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`;

export default GallerySlider;
