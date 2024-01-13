/* eslint-disable react/prop-types */
import { styled } from 'styled-components';

import CustomText from '../../components/reusable/Text';

const ToursPricing = ({ data }) => {
  return (
    <Container>
      {data.pricing.map((item, index) => {
        return (
          <Pricing key={index}>
            <CustomText fontSize="18px" fontWeight="600" color="#007A33" textAlign="left">
              {item.person}
            </CustomText>
            {item.price.map((prices, index) => {
              return (
                <Prices key={index}>
                  <CustomText
                    fontSize="18px"
                    fontWeight="400"
                    lineHeight="35px"
                    color="#222"
                    textAlign="center">
                    {prices}
                  </CustomText>
                </Prices>
              );
            })}
          </Pricing>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;
  gap: 5px;
  @media screen and (max-width: 485px) {
    justify-content: center;
    gap: 10px;
  }
`;

const Pricing = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200px;
`;

const Prices = styled.li`
  list-style: initial;
`;

export default ToursPricing;
