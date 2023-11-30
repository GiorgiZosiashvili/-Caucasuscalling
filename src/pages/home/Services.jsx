/* eslint-disable react/prop-types */
import { styled } from 'styled-components';

import CustomText from '../../components/reusable/Text';

const Services = ({ title, description, data }) => {
  return (
    <Container>
      <CustomText
        textAlign="left"
        fontSize="24px"
        fontWeight="800"
        lineHeight="30px"
        margin="0px 10px 16px"
        color="#172432">
        {title}
      </CustomText>
      <CustomText
        textAlign="left"
        fontSize="24px"
        fontWeight="400"
        lineHeight="29px"
        color="#767E86"
        margin="0px 10px 55px">
        {description}
      </CustomText>
      <ContentContainer>
        {data.map((service, index) => {
          return (
            <Content key={index}>
              <Image src={service.image} />
              <CustomText
                style={{ width: 232 }}
                textAlign="center"
                fontSize="20px"
                fontWeight="600"
                lineHeight="27px"
                margin="0px 0px 15px"
                color="#000000">
                {service.title}
              </CustomText>
            </Content>
          );
        })}
      </ContentContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0px auto 150px;
  max-width: 1156px;
  @media screen and (max-width: 885px) {
    padding: 0px 40px;
  }
`;
const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 265px;
  height: 229px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.35);
  border-radius: 24px;
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export default Services;
