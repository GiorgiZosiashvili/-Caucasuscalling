import Background from 'assets/images/background.png';
import Person from 'assets/images/person.png';
import { styled } from 'styled-components';

import CustomText from 'components/reusable/Text';

function AboutUs() {
  const details = [
    {
      numbers: '20+',
      text: 'Years Experience',
    },
    {
      numbers: '100+',
      text: 'Happy Customer',
    },
    {
      numbers: '15+',
      text: 'Choice of Services',
    },
    {
      numbers: '10+',
      text: 'Professional Guides',
    },
  ];
  return (
    <Container>
      <BackgroundImage src={Background} />
      <InfoContainer>
        <Image src={Person} />
        <TextContainer>
          <CustomText fontSize="16px" fontWeight="600" color="#999" lineHeight="19.5px">
            WELCOME TO OUR WEBSITE!
          </CustomText>
          <CustomText
            fontSize="24px"
            fontWeight="900"
            color="#333"
            margin="14px 0px 26px"
            lineHeight="29.26px">
            We are the best company for your visit
          </CustomText>
          <CustomText
            fontSize="18px"
            fontWeight="400"
            color="#666"
            margin="0px 0px 50px"
            lineHeight="32px"
            textAlign="left">
            Our passion is to curate unforgettable journeys, tailored to your preferences and
            desires. Whether you dream of uncovering ancient history, savoring culinary delights, or
            relishing the great outdoors, we have the perfect adventure in store for you. Our team
            of expert guides, drivers, and travel enthusiasts are at your service, ready to unveil
            the hidden gems of Georgia. We offer thoughtfully designed packages that
          </CustomText>
          <Div>
            {details.map((detail, i) => {
              return (
                <DetailsContainer key={i}>
                  <CustomText
                    fontSize="28px"
                    fontWeight="600"
                    color="#FF6B35"
                    textAlign="left"
                    lineHeight="32px">
                    {detail.numbers}
                  </CustomText>
                  <CustomText
                    fontSize="16px"
                    fontWeight="400"
                    color="#333"
                    textAlign="left"
                    lineHeight="26px"
                    margin="6px 0px 0px">
                    {detail.text}
                  </CustomText>
                </DetailsContainer>
              );
            })}
          </Div>
        </TextContainer>
      </InfoContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 630px;
  position: relative;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1140px;
  height: 443px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 693px;
`;

const Image = styled.img`
  width: 300px;
  height: 400px;
`;
const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 503px;
  justify-content: space-between;
`;
const DetailsContainer = styled.div`
  width: 90px;
`;
const DetailsNumber = styled.h3`
  font-size: 28px;
  font-weight: 700;
  color: #ff6b35;
`;
const DetailsText = styled.h4`
  font-size: 16px;
  font-weight: 400;
  color: #333333;
`;

export default AboutUs;
