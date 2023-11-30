import { useState } from 'react';
import { styled } from 'styled-components';

import Seasons from '../../assets/images/Seasons.png';
import CustomText from '../../components/reusable/Text';
import { Autumn, Spring, Summer, Winter } from '../../components/SVG/Svgs';
import { seasonsData } from '../../data/data';

const Filter = () => {
  const [selectedButton, setSelectedButton] = useState(0);
  return (
    <FilterContainer>
      <Image src={Seasons} />
      <SeasonsContainer>
        <CustomText
          textAlign="left"
          fontSize="24px"
          fontWeight="700"
          margin="0px 50px 30px"
          color="#FFFFFF"
          lineHeight="29px">
          Filter tours based on your favorite season:
        </CustomText>
        <ButtonContainer>
          {seasonsData.map((season, index) => {
            const active = selectedButton === index;
            return (
              <SeasonsButton
                style={{
                  backgroundColor: active ? '#346072' : '#fff',
                }}
                onClick={() => {
                  setSelectedButton(index);
                }}
                key={index}>
                {index === 1 ? (
                  <Spring />
                ) : index === 2 ? (
                  <Summer />
                ) : index === 3 ? (
                  <Autumn />
                ) : index === 4 ? (
                  <Winter />
                ) : null}
                <CustomText
                  textAlign="left"
                  fontSize="18px"
                  fontWeight="700"
                  color={active ? '#FFFFFF' : '#6F6F70'}
                  margin="0px 0px 0px 16px"
                  lineHeight="22px">
                  {season.title}
                </CustomText>
              </SeasonsButton>
            );
          })}
        </ButtonContainer>
      </SeasonsContainer>
    </FilterContainer>
  );
};
const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: end;
  justify-content: center;
  min-height: 50vh;
  @media screen and (max-width: 1000px) {
    min-height: 100vh;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`;
const SeasonsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1286px;
`;
const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 60px;
  gap: 5px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  transition: all 0.3s;
`;
const SeasonsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 60px;
  border-radius: 20px;
  transition: all 0.3s;
`;
export default Filter;
