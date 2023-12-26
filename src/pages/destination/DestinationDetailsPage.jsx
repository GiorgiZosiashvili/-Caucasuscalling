import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import { destinationsData } from '../../data/data';
import DestinationSlider from './DestinationsSlider';

import Languages from 'components/Languages';
import Footer from 'components/reusable/Footer';
import Header from 'components/reusable/Header';
import MainContainer from 'components/reusable/MainContainer';
import CustomText from 'components/reusable/Text';

const DestinationDetailsPage = () => {
  const { title } = useParams();
  const chosenDestination = destinationsData?.find((destination) => destination.title === title);

  return (
    <MainContainer>
      <Languages />
      <Body>
        <Header backgroundColor="#346172" page={'/Destination'} />
        <FirstContentContainer>
          <DestinationSlider images={chosenDestination?.images} />
          <InitialText key={chosenDestination.sections[0].id}>
            <CustomText
              color="black"
              fontSize="30px"
              fontWeight="800"
              lineHeight="37px"
              margin="0px 0px 30px"
              textAlign="left">
              {chosenDestination.sections[0].title}
            </CustomText>
            <CustomText
              style={{ letterSpacing: 1 }}
              color="black"
              fontSize="18px"
              fontWeight="400"
              lineHeight="30px"
              textAlign="left">
              {chosenDestination.sections[0].content}
            </CustomText>
          </InitialText>
        </FirstContentContainer>
        <SecondContentContainer>
          <CustomText
            color="black"
            fontSize="30px"
            fontWeight="800"
            lineHeight="26px"
            margin="0px 0px 30px"
            textAlign="left">
            {chosenDestination.sections[1].title}
          </CustomText>
          <Image src={chosenDestination.sections[1].imageUrl} />
          <CustomText
            color="black"
            fontSize="18px"
            fontWeight="400"
            lineHeight="30px"
            margin="35px 0px 30px"
            textAlign="left">
            {chosenDestination.sections[1].content}
          </CustomText>
          <ItemsContainer>
            {chosenDestination.sections[1].details.map((detail, index) => {
              return (
                <ListOfItems key={index}>
                  <CustomText
                    color="black"
                    textAlign="left"
                    fontWeight="700"
                    fontSize="18px"
                    lineHeight="27px">
                    {detail.header}{' '}
                    <span
                      style={{
                        color: '#333',
                        fontWeight: '400',
                        fontSize: 18,
                      }}>
                      {detail.detail}
                    </span>
                  </CustomText>
                </ListOfItems>
              );
            })}
          </ItemsContainer>
        </SecondContentContainer>
      </Body>
      <Footer />
    </MainContainer>
  );
};

export default DestinationDetailsPage;
const Body = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 130px;
  @media screen and (max-width: 1200px) {
    padding: 0px 20px;
  }
`;
const FirstContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  max-width: 1156px;
  margin-top: 138px;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  @media screen and (max-width: 1184px) {
    padding: 0px 20px;
    justify-content: center;
  }
`;
const SecondContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  max-width: 1156px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 1184px) {
    padding: 0px 20px;
    justify-content: left;
  }
`;
const InitialText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  max-width: 440px;
  margin-bottom: 70px;
`;
const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
`;
const ItemsContainer = styled.ol`
  list-style-type: decimal;
`;
const ListOfItems = styled.li`
  margin-top: 10px;
`;
