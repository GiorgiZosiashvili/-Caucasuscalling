import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import Header from '../../components/reusable/Header';
import CustomText from '../../components/reusable/Text';
import { tourPackagesData } from '../../data/data';
import TourHighlights from './TourHighlights';
import ToursPageSlider from './ToursPageSlider';
import ToursPricing from './ToursPricing';

import Languages from 'components/Languages';
import Footer from 'components/reusable/Footer';
import MainContainer from 'components/reusable/MainContainer';

const ToursDetailsPage = () => {
  const { title } = useParams();
  const chosenPackage = tourPackagesData?.find((destination) => destination.title === title);
  const [active, setActive] = useState(1);
  const buttons = [
    {
      title: 'Tour Highlights',
      id: 1,
    },
    {
      title: 'Pricing',
      id: 2,
    },
  ];

  return (
    <MainContainer>
      <Languages />
      <Body>
        <Header page={'/Tours'} backgroundColor="#346172" />
        <CustomText
          margin="138px 0px 0px"
          fontSize="30px"
          fontWeight="600"
          lineHeight="30px"
          color="#222222"
          textAlign="center">
          {chosenPackage.title}
        </CustomText>
        <CustomText
          fontSize="20px"
          fontWeight="500"
          lineHeight="30px"
          color="#999999"
          textAlign="center"
          margin="20px 0px 20px">
          {chosenPackage.length}
        </CustomText>
        <ToursPageSlider data={chosenPackage.images} />
        <Filter>
          {buttons.map((button) => {
            const activeButton = active === button.id;
            return (
              <Buttons
                style={{ backgroundColor: activeButton && '#FF6B35' }}
                key={button.id}
                onClick={() => {
                  setActive(button.id);
                }}>
                <CustomText
                  fontSize="18px"
                  fontWeight="700"
                  lineHeight="22px"
                  color={activeButton ? '#FFFFFF' : '#141515'}
                  textAlign="center"
                  margin="20px 0px 20px">
                  {button.title}
                </CustomText>
              </Buttons>
            );
          })}
        </Filter>
        <ContentContainer>
          {active === 1 ? (
            <TourHighlights data={chosenPackage} />
          ) : (
            <ToursPricing data={chosenPackage} />
          )}
        </ContentContainer>
      </Body>
      <Footer />
    </MainContainer>
  );
};

const Body = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f6f6;
  @media screen and (max-width: 1200px) {
    padding: 0px 20px;
    justify-content: center;
  }
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1128px;
  height: 60px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: #ffffff;
  overflow: hidden;
`;
const Buttons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 282px;
  height: 60px;
  cursor: pointer;
  transition: all 1s;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  max-width: 1128px;
  justify-content: left;
  padding: 40px 40px;
  margin: 0px auto 125px;
  background-color: #ffffff;
  border: solid 0.5px #e8e8e8;
  @media screen and (max-width: 885px) {
    padding: 40px 20px;
  }
`;
export default ToursDetailsPage;
