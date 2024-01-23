import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import Header from '../../components/reusable/Header';
import MainContainer from '../../components/reusable/MainContainer';
import CustomText from '../../components/reusable/Text';
import { destinationsData } from '../../data/data';

import Languages from 'components/Languages';
import Footer from 'components/reusable/Footer';

const Destination = () => {
  return (
    <MainContainer>
      <Languages />
      <Div>
        <Header backgroundColor="#346172" page={'/Destination'} />
        <ContentContainer>
          {destinationsData?.map((destination, i) => {
            return (
              <DestinationCard to={`/Destination/${destination.title}`} key={i}>
                <Image src={destination.image} />
                <CustomText
                  style={{ letterSpacing: 2, position: 'absolute' }}
                  textAlign="center"
                  fontSize="45px"
                  fontWeight="800"
                  lineHeight="55px"
                  color="white">
                  {destination.title}
                </CustomText>
              </DestinationCard>
            );
          })}
        </ContentContainer>
      </Div>
      <Footer />
    </MainContainer>
  );
};

const Div = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
  margin: 138px auto 117px;
  gap: 20px;
  padding: 0px 20px;
  @media screen and (max-width: 1165px) {
    justify-content: center;
  }
`;
const DestinationCard = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 10px;
  width: 100%;
  max-width: 552px;
  overflow: hidden;
  height: 422px;
  border-radius: 30px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`;
export default Destination;
