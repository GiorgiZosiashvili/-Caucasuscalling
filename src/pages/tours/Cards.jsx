import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import CustomText from '../../components/reusable/Text';
import { Location, NavArrow } from '../../components/SVG/Svgs';
import { tourPackagesData } from '../../data/data';

const Cards = () => {
  return (
    <CardContainer>
      {tourPackagesData?.map((item, index) => (
        <Card key={index} to={`/Tours/${item.title}`}>
          <LocationContainer>
            <Icon />
            <TruncatedText
              textAlign="left"
              fontSize="14px"
              fontWeight="400"
              lineHeight="16px"
              color="#fff">
              {item.location}
            </TruncatedText>
          </LocationContainer>
          <Image src={item?.image} alt={item?.title} />
          <TextContainer>
            <CustomText
              style={{ maxWidth: 300 }}
              textAlign="left"
              fontSize="20px"
              fontWeight="500"
              lineHeight="25px"
              color="#222">
              {item?.title}
            </CustomText>
            <CustomText
              style={{ maxWidth: 300 }}
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
  width: 100%;
  justify-content: left;
  align-items: center;
  padding: 0px 20px;
  margin: 73px auto 150px;
  gap: 31px;
  @media screen and (max-width: 1000px) {
    justify-content: space-evenly;
  }
`;
const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 0.5px solid #e8e8e8;
  width: 100%;
  max-width: 402px;
  height: 430px;
  position: relative;
  border-radius: 12px;
  cursor: pointer;
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
const Icon = styled(Location)`
  margin-right: 10px;
  width: 24px !important;
  height: 24px !important;
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 24px 16px;
`;
const TruncatedText = styled(CustomText)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  max-width: 270px;
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
