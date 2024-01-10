import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import Header from '../../components/reusable/Header';
import CustomText from '../../components/reusable/Text';
import { includedServices, tourPackagesData } from '../../data/data';
import ToursPageSlider from './ToursPageSlider';

import Languages from 'components/Languages';
import MainContainer from 'components/reusable/MainContainer';

const ToursDetailsPage = () => {
  const { title } = useParams();
  const chosenPackage = tourPackagesData?.find((destination) => destination.title === title);

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
          margin="30px 0px 50px">
          {chosenPackage.length}
        </CustomText>
        <ToursPageSlider data={chosenPackage.images} />
        <ContentContainer>
          <TextContainer>
            {chosenPackage.trip.map((text, index) => {
              return (
                <Text key={index}>
                  <CustomText
                    fontSize="18px"
                    fontWeight="500"
                    lineHeight="27px"
                    color="#007A33"
                    margin="0px 0px 20px"
                    textAlign="left">
                    {text.day}
                    <span
                      style={{
                        color: '#000000',
                        fontSize: 20,
                        fontWeight: '700',
                        fontFamily: 'Montserrat, sans-serif',
                      }}>
                      {text.title}
                    </span>
                  </CustomText>
                  {text?.info.map((infoText, index) => {
                    return (
                      <ul key={index}>
                        <li style={{ listStyle: 'initial' }}>
                          <CustomText
                            fontSize="18px"
                            fontWeight="400"
                            lineHeight="35px"
                            color="#222"
                            textAlign="left">
                            {infoText}
                          </CustomText>
                        </li>
                      </ul>
                    );
                  })}
                </Text>
              );
            })}
          </TextContainer>
          {includedServices.map((services, index) => {
            return (
              <IncludedServices key={index}>
                <CustomText
                  fontSize="18px"
                  fontWeight="600"
                  lineHeight="35px"
                  color="#222"
                  textAlign="left">
                  {services.title}
                </CustomText>
                {services.content.map((text, index) => {
                  return (
                    <Ul key={index}>
                      <li style={{ listStyle: 'initial' }}>
                        <CustomText
                          fontSize="16px"
                          fontWeight="400"
                          lineHeight="35px"
                          color="#222"
                          textAlign="left">
                          {text}
                        </CustomText>
                      </li>
                    </Ul>
                  );
                })}
              </IncludedServices>
            );
          })}
        </ContentContainer>
      </Body>
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
  @media screen and (max-width: 1200px) {
    padding: 0px 20px;
    justify-content: center;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  max-width: 1128px;
  justify-content: left;
  padding: 40px 42px;
  background-color: #ffffff;
  border: solid 0.5px #e8e8e8;
  @media screen and (max-width: 885px) {
    padding: 40px 10px;
  }
`;
const TextContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;
const Text = styled.li``;
const IncludedServices = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 20px;
`;
const Ul = styled.ul`
  display: flex;
`;
export default ToursDetailsPage;
