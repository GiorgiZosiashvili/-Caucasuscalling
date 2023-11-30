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
          {destinationsData.map((destination, i) => {
            return (
              <Link to={`/Destination/${destination.title}`} key={i}>
                <DestinationCard>
                  <Image src={destination.image} />
                  <CustomText
                    style={{ letterSpacing: 2 }}
                    textAlign="center"
                    fontSize="45px"
                    fontWeight="800"
                    lineHeight="55px"
                    color="white">
                    {destination.title}
                  </CustomText>
                </DestinationCard>
              </Link>
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
  align-items: center;
  justify-content: center;
  gap: 58px;
  padding: 0px 20px;
  margin: 138px 0px 117px;
`;

const DestinationCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  width: 552px;
  height: 422px;
`;
const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;
export default Destination;
