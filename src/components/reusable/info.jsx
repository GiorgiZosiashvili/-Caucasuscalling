/* eslint-disable react/prop-types */
import Background from 'assets/images/background.png';
import { styled } from 'styled-components';

import { aboutUs } from '../../data/data';

import CustomText from 'components/reusable/Text';

function Info({ description, title, header, details, image }) {
  return (
    <Container>
      <BackgroundImage src={Background} />
      <InfoContainer>
        <Image src={image} />
        <TextContainer>
          <CustomText
            textAlign="left"
            fontSize="16px"
            fontWeight="600"
            margin="0px 10px"
            color={header === 'Health Programs' ? '#FF6B35' : '#999'}
            lineHeight="19.5px">
            {header}
          </CustomText>
          <CustomText
            textAlign="left"
            fontSize="24px"
            fontWeight="900"
            color="#333"
            margin="14px 10px 26px"
            lineHeight="29.26px">
            {title}
          </CustomText>
          <CustomText
            fontSize="18px"
            fontWeight="400"
            color="#666"
            margin="0px 10px 50px"
            lineHeight="32px"
            textAlign="left">
            {description}
          </CustomText>
          {details && (
            <Div>
              {details?.map((detail, i) => {
                return (
                  <DetailsContainer key={i}>
                    <CustomText
                      fontSize="28px"
                      fontWeight="600"
                      color="#FF6B35"
                      textAlign="left"
                      margin="0px 10px "
                      lineHeight="32px">
                      {detail.numbers}
                    </CustomText>
                    <CustomText
                      fontSize="16px"
                      fontWeight="400"
                      color="#333"
                      textAlign="left"
                      lineHeight="26px"
                      margin="6px 10px 0px">
                      {detail.text}
                    </CustomText>
                  </DetailsContainer>
                );
              })}
            </Div>
          )}
        </TextContainer>
        <AboutUs>
          {aboutUs?.map((text, index) => {
            return (
              <AboutUsContainer key={index}>
                <CustomText
                  textAlign="left"
                  fontSize="18px"
                  fontWeight="900"
                  color="#666"
                  lineHeight="29px">
                  {text.title}
                </CustomText>
                {text?.names.map((person, index) => {
                  return (
                    <AboutUsTextContainer key={index}>
                      <CustomText
                        textAlign="left"
                        fontSize="18px"
                        fontWeight="700"
                        color="#FF6B35"
                        lineHeight="29px">
                        {person.name}
                      </CustomText>
                      <CustomText
                        textAlign="left"
                        fontSize="18px"
                        fontWeight="400"
                        color="#666"
                        lineHeight="29px">
                        {person.destination}
                      </CustomText>
                    </AboutUsTextContainer>
                  );
                })}
                <CustomText
                  textAlign="left"
                  fontSize="18px"
                  fontWeight="500"
                  color="#666"
                  lineHeight="29px">
                  {text.conclusion}
                </CustomText>
              </AboutUsContainer>
            );
          })}
        </AboutUs>
      </InfoContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 1130px;
  flex-wrap: wrap;
  padding: 20px 40px 20px;
  min-height: 630px;
  align-self: center;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 690px;
`;

const AboutUs = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 50px auto 30px;
`;
const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const AboutUsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
const Image = styled.img`
  height: 100%;
  object-fit: cover;
  margin-right: 3%;
  max-width: 320px;
  max-height: 420px;
  margin-bottom: 30px;
  min-width: 250px;
`;
const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  object-fit: cover;
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
  flex-wrap: wrap;
  gap: 50px;
`;
const DetailsContainer = styled.div`
  max-width: 100px;
  display: flex;
  flex-direction: column;
`;

export default Info;
