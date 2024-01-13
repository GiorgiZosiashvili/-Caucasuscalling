/* eslint-disable react/prop-types */
import { styled } from 'styled-components';

import CustomText from '../../components/reusable/Text';
import { includedServices } from '../../data/data';

const TourHighlights = ({ data }) => {
  return (
    <>
      <TextContainer>
        {data.trip.map((text, index) => {
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
                    <li style={{ listStyle: 'initial', marginLeft: 15 }}>
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
                  <li style={{ listStyle: 'initial', marginLeft: 15 }}>
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
    </>
  );
};
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

export default TourHighlights;
