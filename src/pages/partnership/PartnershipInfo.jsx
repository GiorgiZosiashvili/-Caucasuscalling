/* eslint-disable react/prop-types */
import { styled } from 'styled-components';

import CustomText from 'components/reusable/Text';

const PartnershipInfo = ({ data }) => {
  return (
    <Container>
      {data?.content.map((info) => {
        return (
          <Info key={info.id}>
            {info.id === 2 ? (
              <Content>
                <CustomText
                  style={{ maxWidth: 658 }}
                  color="#666666"
                  fontWeight="500"
                  lineHeight="24px"
                  fontSize="20px"
                  textAlign="left">
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>
                    {info.title}
                  </span>
                  {info.description}
                </CustomText>
                <Box>
                  <Icon src={info.image} />
                  <CustomText
                    color="#666666"
                    fontSize="20px"
                    fontWeight="700"
                    lineHeight="24px"
                    margin="28px 0px 7px">
                    {info.header}
                  </CustomText>
                  <CustomText color="#999999" fontSize="16px" lineHeight="28px" fontWeight="400">
                    {info.text}
                  </CustomText>
                </Box>
              </Content>
            ) : (
              <Content>
                <Box>
                  <Icon src={info.image} />
                  <CustomText
                    color="#666666"
                    fontSize="20px"
                    fontWeight="700"
                    lineHeight="24px"
                    margin="28px 0px 7px">
                    {info.header}
                  </CustomText>
                  <CustomText color="#999999" fontSize="16px" lineHeight="28px" fontWeight="400">
                    {info.text}
                  </CustomText>
                </Box>
                <CustomText
                  style={{ maxWidth: 658 }}
                  color="#666666"
                  fontWeight="500"
                  lineHeight="24px"
                  fontSize="20px"
                  textAlign="left">
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>
                    {info.title}
                  </span>
                  {info.description}
                </CustomText>
              </Content>
            )}
          </Info>
        );
      })}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 838px;
  margin: 58px 0px 0px;
  gap: 110px;
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 52px;
  padding: 0px 20px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 206px;
  max-width: 274px;
`;
const Icon = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

export default PartnershipInfo;
