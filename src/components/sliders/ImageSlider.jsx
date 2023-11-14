/* eslint-disable react/prop-types */
import Image from 'assets/images/upp.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

import CustomText from '../reusable/Text';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
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

const items = [
  { image: Image, text: 'Our Travel Agency Provides Individual and Group Tours' },
  { image: Image, text: 'Our Travel Agency Provides Individual and Group Tours' },
  { image: Image, text: 'Our Travel Agency Provides Individual and Group Tours' },
  { image: Image, text: 'Our Travel Agency Provides Individual and Group Tours' },
];

const ImageSlider = () => {
  const CustomDot = ({ onClick, ...rest }) => {
    const { active } = rest;
    return <Dot onClick={() => onClick()} active={active} />;
  };
  return (
    <Carousel customDot={<CustomDot />} showDots={true} responsive={responsive} arrows={false}>
      {items.map((item, index) => {
        return (
          <Container key={index}>
            <Photo src={item.image} />
            <SlideText>
              <CustomText
                style={{ letterSpacing: 7.5, width: 672 }}
                textAlign="center"
                fontSize="22px"
                fontWeight="500"
                lineHeight="33.75px"
                color="white">
                Our Travel Agency <br /> Provides Individual and Group Tours
              </CustomText>
            </SlideText>
          </Container>
        );
      })}
    </Carousel>
  );
};

const Container = styled.div`
  width: 100%;
  height: 693px;
  background-color: red;
  position: relative;
`;
const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const SlideText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10; // Ensure text is above the image
`;
const Dot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#FF7757' : '#fff')};
  margin: 0px 24px 23px;
  cursor: pointer;
`;

export default ImageSlider;
