import { styled } from 'styled-components';

import CustomText from '../../components/reusable/Text';
import { Location, NavArrow } from '../../components/SVG/Svgs';
import { tourPackagesData } from '../../data/data';

const Cards = () => {
  return (
    <CardContainer>
      {tourPackagesData.map((item, index) => (
        <Card key={index}>
          <LocationContainer>
            <Location />
            <CustomText
              style={{ marginLeft: 10 }}
              textAlign="left"
              fontSize="16px"
              fontWeight="400"
              lineHeight="16px"
              color="#fff">
              {item.location}
            </CustomText>
          </LocationContainer>
          <Image src={item?.image} alt={item?.title} />
          <TextContainer>
            <CustomText
              textAlign="left"
              fontSize="20px"
              fontWeight="500"
              lineHeight="20px"
              color="#222">
              {item?.title}
            </CustomText>
            <CustomText
              textAlign="left"
              fontSize="14px"
              fontWeight="400"
              lineHeight="14px"
              color="#999">
              {item?.length}
            </CustomText>
            <CustomText
              textAlign="left"
              fontSize="24px"
              fontWeight="500"
              lineHeight="24px"
              color="#FA7436">
              {item?.price}
            </CustomText>
            <Div>
              <CustomText
                textAlign="left"
                fontSize="14px"
                fontWeight="500"
                lineHeight="14px"
                color="#007A33">
                View
                <br /> More
              </CustomText>
              <NavArrow />
            </Div>
          </TextContainer>
        </Card>
      ))}
    </CardContainer>
  );
};

export default Cards;
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1286px;
  margin: 73px auto 150px;
  gap: 31px;
  justify-content: left;
  @media screen and (max-width: 1000px) {
    justify-content: space-evenly;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.5px solid #e8e8e8;
  width: 31.7%;
  min-width: 310px;
  height: 430px;
  position: relative;
  border-radius: 12px;
`;
const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  position: absolute;
  bottom: 187px;
  width: 100%;
  height: 56px;
  padding-left: 16px;
  background-color: #00000045;
`;
const Image = styled.img`
  width: 100%;
  height: 242px;
  object-fit: fill;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 248px;
  height: 100px;
  margin-left: 15px;
  margin-top: 24px;
  justify-content: space-between;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 24px;
  right: 20px;
  height: 26px;
`;
