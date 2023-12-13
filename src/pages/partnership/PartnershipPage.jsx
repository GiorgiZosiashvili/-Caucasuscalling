import { styled } from 'styled-components';

import Planes from '../../assets/images/planes.png';
import { partnershipData } from '../../data/data';
import PartnershipInfo from './PartnershipInfo';

import Languages from 'components/Languages';
import Footer from 'components/reusable/Footer';
import Header from 'components/reusable/Header';
import MainContainer from 'components/reusable/MainContainer';
import CustomText from 'components/reusable/Text';

const PartnershipPage = () => {
  return (
    <MainContainer>
      <Languages />
      <Body>
        <Header backgroundColor="#346172" page={'/Partnership'} />
        <ContentContainer>
          {partnershipData.map((partnership, index) => {
            return (
              <Content key={index}>
                <InitialContainer>
                  <Image src={Planes} />
                  <TextContainer>
                    <CustomText color="#383737" fontSize="30px" fontWeight="500">
                      Why
                      <Span> Caucasus</Span> Calling?
                    </CustomText>
                    <CustomText
                      color="#666666"
                      fontSize="20px"
                      lineHeight="29px"
                      fontWeight="500"
                      margin="30px 0xp 0px">
                      {partnership.description}
                    </CustomText>
                  </TextContainer>
                </InitialContainer>
                <PartnershipInfo data={partnership} />
              </Content>
            );
          })}
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
  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 80px;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 106px;
`;
const InitialContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  position: relative;
  min-height: 263px;
  padding: 58px 20px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 958px;
  gap: 30px;
`;
const Span = styled.span`
  color: #fa7436;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
`;

export default PartnershipPage;
